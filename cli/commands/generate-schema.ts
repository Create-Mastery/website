import fs from 'node:fs'
import path from 'node:path'
import chalk from 'chalk'
import * as GenerateSchema from 'generate-schema'
import { findProjectRoot } from '../utils/find-project-root'

const projectRoot = findProjectRoot()

const dictionarieDir = path.resolve(projectRoot ?? '', 'src/i18n/dictionaries/')
const dictionary = JSON.parse(
  fs.readFileSync(`${dictionarieDir}/en.json`, 'utf8')
)
const schemaPath = path.resolve(
  projectRoot ?? '',
  `${dictionarieDir}/schema.schema.json`
)

interface JsonSchema {
  type: string
  properties?: {
    [key: string]: JsonSchema
  }
  required?: string[]
}

function addRequiredRecursively(
  schemaNode: JsonSchema,
  dataNode: Record<string, unknown>
) {
  if (
    schemaNode.type === 'object'
    && dataNode
    && typeof dataNode === 'object'
  ) {
    schemaNode.required = Object.keys(dataNode).filter((k) => k !== '$schema')
    if (schemaNode.properties) {
      for (const key of Object.keys(schemaNode.properties || {})) {
        addRequiredRecursively(
          schemaNode.properties[key],
          dataNode[key] as Record<string, unknown>
        )
      }
    }
  }
}

export function genSchema() {
  const schema = GenerateSchema.json('dictionary schema', dictionary)

  addRequiredRecursively(schema, dictionary)

  fs.writeFileSync(schemaPath, JSON.stringify(schema, null, 2), 'utf8')

  console.log(chalk.blue('Schema generated successfully'))
}
