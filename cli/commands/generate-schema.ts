import * as GenerateSchema from 'generate-schema'

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import chalk from 'chalk'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const dictionarieDir = path.resolve(__dirname, '../../src/i18n/dictionaries/')
const dictionary = JSON.parse(
  fs.readFileSync(`${dictionarieDir}/en.json`, 'utf8')
)
const schemaPath = path.resolve(
  __dirname,
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
