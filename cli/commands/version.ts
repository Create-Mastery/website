import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import chalk from 'chalk'
import { globSync } from 'glob'
import siteInfo from '../../package.json'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default function printVersion(verbose: boolean) {
  const guideDirectory = path.resolve(__dirname, '../../src/app/guide')
  const getLanguages = () => fs.readdirSync(guideDirectory).length
  const deps = Object.keys(siteInfo.dependencies).length
  const devDeps = Object.keys(siteInfo.devDependencies).length

  let languages: number = getLanguages()
  let guides: number = globSync(`${guideDirectory}/**/*.tsx`).length

  const createMasteryASCIIArt: string = `
┏━╸┏━┓┏━╸┏━┓╺┳╸┏━╸   ┏┳┓┏━┓┏━┓╺┳╸┏━╸┏━┓╻ ╻
┃  ┣┳┛┣╸ ┣━┫ ┃ ┣╸    ┃┃┃┣━┫┗━┓ ┃ ┣╸ ┣┳┛┗┳┛
┗━╸╹┗╸┗━╸╹ ╹ ╹ ┗━╸   ╹ ╹╹ ╹┗━┛ ╹ ┗━╸╹┗╸ ╹
──────────────────────────────────────────`

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
