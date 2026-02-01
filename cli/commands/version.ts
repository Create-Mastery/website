import fs from 'node:fs'
import path from 'node:path'
import chalk from 'chalk'
import { globSync } from 'glob'
import type { PackageJson } from 'type-fest'
import { createMasteryASCIIArtSmall } from '../utils/arts'

export default function printVersion(
  verbose: boolean,
  cliInfo: PackageJson,
  projectRoot: string
) {
  const dictionarieDir = path.resolve(projectRoot, 'src/i18n/dictionaries')
  const guideDirectory = path.resolve(projectRoot, 'src/app/**/guide')

  // since schema.schema.json is also counted we decrement the value by 1 to get the actual number of languages
  const getLanguages = () =>
    fs.readdirSync(dictionarieDir).filter((f) => f.endsWith('.json')).length - 1

  const deps = Object.keys(cliInfo.dependencies ?? '').length
  const devDeps = Object.keys(cliInfo.devDependencies ?? '').length

  const languages: number = getLanguages()
  const guides: number = globSync(`${guideDirectory}/**/*.tsx`).length

  console.log(chalk.blue(createMasteryASCIIArtSmall))
  console.log(chalk.blue('VERSION   ─'), chalk.reset(cliInfo.version))
  console.log(chalk.blue('GUIDES    ─'), chalk.reset(guides))
  console.log(chalk.blue('LANGUAGES ─'), chalk.reset(languages))

  if (verbose) {
    console.log(chalk.blue('──────────────────────────────────────────'))
    console.log(chalk.blue('DEPENDENCIES     ─'), chalk.reset(deps))
    console.log(chalk.blue('DEV DEPENDENCIES ─'), chalk.reset(devDeps))
  }

  console.log()
}
