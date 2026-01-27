import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import chalk from 'chalk'
import { i18n } from '@/i18n/i18n'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const dictionarieDir = path.resolve(__dirname, '../../src/i18n/dictionaries')

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

function genI18n() {
  const files = fs
    .readdirSync(dictionarieDir)
    .filter((f) => f.endsWith('.json'))

  const locales = files
    .map((f) => `'${f.replace('.json', '')}'`)
    .join(',\n\t\t')
  const content = `export const i18n = {
  defaultLocale: 'en',
  locales: [
\t\t${locales}
  ],
}`

  fs.writeFileSync(path.resolve(__dirname, '../../src/i18n/i18n.ts'), content)
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
  genI18n()

  console.log(chalk.blue('Language       - '), chalk.reset(language))
  console.log(
    chalk.blue('File Create at - '),
    chalk.reset(`@/i18n/dictionaries/${language}.json`)
  )
  console.log(chalk.blue('Regenerated files:'))
  console.log('  @/src/i18n/i18n.ts')
  console.log('  @/src/i18n/locales.ts')
  console.log()
  console.log(chalk.blue('Now you need to add the actual values to the file!'))
}
