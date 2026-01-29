import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import chalk from 'chalk'
import { globSync } from 'glob'
import siteInfo from '../../package.json'
import { createMasteryASCIIArt } from '../utils/art'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default function printVersion(verbose: boolean) {
  const dictionarieDir = path.resolve(__dirname, '../../src/i18n/dictionaries')
  const guideDirectory = path.resolve(__dirname, '../../src/app/**/guide')

  // since schema.schema.json is also counted we decrement the value by 1 to get the actual number of languages
  const getLanguages = () =>
    fs.readdirSync(dictionarieDir).filter((f) => f.endsWith('.json')).length - 1

  const deps = Object.keys(siteInfo.dependencies).length
  const devDeps = Object.keys(siteInfo.devDependencies).length

  const languages: number = getLanguages()
  const guides: number = globSync(`${guideDirectory}/**/*.tsx`).length

  console.log(chalk.blue(createMasteryASCIIArt))
  console.log(chalk.blue('VERSION   ─'), chalk.reset(siteInfo.version))
  console.log(chalk.blue('GUIDES    ─'), chalk.reset(guides))
  console.log(chalk.blue('LANGUAGES ─'), chalk.reset(languages))

  if (verbose) {
    console.log(chalk.blue('──────────────────────────────────────────'))
    console.log(chalk.blue('DEPENDENCIES     ─'), chalk.reset(deps))
    console.log(chalk.blue('DEV DEPENDENCIES ─'), chalk.reset(devDeps))
  }

  console.log()
}
