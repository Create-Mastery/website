#!/usr/bin/env tsx

import { execSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
import path from 'node:path'
import chalk from 'chalk'
import { program } from 'commander'
import gradient from 'gradient-string'
import type { PackageJson } from 'type-fest'
import addComponent from './commands/add/component'
import addLanguage from './commands/add/language'
import { genSchema } from './commands/generate-schema'
import printScripts from './commands/scripts'
import printVersion from './commands/version'
import { createMasteryASCIIArtBig } from './utils/arts'
import { requireProjectRoot } from './utils/require-project-root'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const add = program.command('add').description('add a language or component')
const gen = program.command('gen').description('generate the dictionary schema')

const cliPackagePath = path.resolve(__dirname, './package.json')

const cliInfo: PackageJson = JSON.parse(readFileSync(cliPackagePath, 'utf-8'))

program.version(cliInfo.version ?? '')
program.name('cm')

program.addHelpText(
  'beforeAll',
  gradient([
    '#8dc4ff',
    '#bddaff',
  ]).multiline(createMasteryASCIIArtBig)
)

// I know this may look silly, but it's for creating space between the prompt and the help message
program.addHelpText('afterAll', ' ')

program.description(cliInfo.description ?? '')

program
  .command('version')
  .description(
    'display the version of the Create Mastery website and some other useful information'
  )
  .option('-v, --verbose', 'verbose output of version command', false)
  .action((options) => {
    const projectRoot = requireProjectRoot()
    printVersion(options.verbose, cliInfo, projectRoot)
  })

program
  .command('scripts')
  .description('display all the available scripts in package.json')
  .action(() => {
    const projectRoot = requireProjectRoot()
    const siteInfo: PackageJson = JSON.parse(
      readFileSync(path.join(projectRoot, 'package.json'), 'utf-8')
    )
    printScripts(siteInfo)
  })

program
  .command('clone')
  .description('clone the Create Mastery repo')
  .argument('<destination>', 'the directory where the repo will be cloned')
  .action((destination) => {
    try {
      execSync(
        `git clone https://github.com/Create-Mastery/website.git ${destination}`
      )

      console.log(chalk.blue('repo cloned in:'), destination)
      console.log(
        chalk.blue('now run `npm install` to install all the dependencies')
      )
    } catch (err) {
      console.error('an error has occurred:', err)
    }
  })

gen
  .command('schema')
  .description('generates the schema for the dictionaries')
  .action(() => {
    const projectRoot = requireProjectRoot()
    genSchema(projectRoot)
  })

add
  .command('component')
  .description('creates a new component (in the src/app/components/ directory)')
  .argument('<name>', 'component to add')
  .option('-p, --props', 'the component is generated with props', false)
  .option('-c, --client', 'the component is a client component', false)
  .action((name, options) => {
    const projectRoot = requireProjectRoot()
    addComponent(name, options.props, options.client, projectRoot)
  })

add
  .command('language')
  .description('creates a new language for i18n')
  .argument('<language>', 'language to add')
  .action((language) => addLanguage(language))

program.parse()
