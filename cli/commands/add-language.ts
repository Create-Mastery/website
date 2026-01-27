import { i18n } from '@/i18n/config'
import chalk from 'chalk'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

type Json =
  | string
  | number
  | boolean
  | null
  | Json[]
  | {
      [key: string]: Json
    }

function stripValues(obj: Json): Json {
  if (typeof obj === 'string') return ''
  if (Array.isArray(obj)) return obj.map(stripValues)
  if (typeof obj === 'object' && obj !== null) {
    return Object.fromEntries(
      Object.entries(obj).map(([k, v]) => [
        k,
        stripValues(v),
      ])
    ) as Json
  }
  return obj
}

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const dictionarieDir = path.resolve(__dirname, '../../src/i18n/dictionaries')

function genLocales() {
  const files = fs
    .readdirSync(dictionarieDir)
    .filter((f) => f.endsWith('.json'))

  const locales = files.map((f) => `'${f.replace('.json', '')}'`).join(' | ')

  const content = `export type locales = ${locales}\n`

  fs.writeFileSync(
    path.resolve(__dirname, '../../src/i18n/locales.ts'),
    content
  )
}

export default function addLanguage(language: string) {
  const input = JSON.parse(fs.readFileSync(`${dictionarieDir}/en.json`, 'utf8'))
  const output = stripValues(input)

  fs.writeFileSync(
    `${dictionarieDir}/${language}.json`,
    JSON.stringify(output, null, 2)
  )

  i18n.locales.push(language)
  genLocales()

  console.log(chalk.blue('Language       - '), chalk.reset(language))
  console.log(
    chalk.blue('File Create at - '),
    chalk.reset(`${dictionarieDir}/${language}.json`)
  )
}
