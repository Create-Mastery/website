#!/usr/bin/env tsx

import { program } from 'commander'
import gradient from 'gradient-string'
import addComponent from './commands/add/component'
import addLanguage from './commands/add/language'
import { genSchema } from './commands/generate-schema'
import printScripts from './commands/scripts'
import printVersion from './commands/version'
import cliInfo from './package.json'
import { createMasteryASCIIArtBig } from './utils/arts'
import { execSync } from 'node:child_process'
import chalk from 'chalk'

const add = program.command('add').description('add a language or component')
const gen = program.command('gen').description('generate the dictionary schema')

program.version(cliInfo.version)
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

program.description(cliInfo.description)

program
  .command('version')
  .description(
    'display the version of the Create Mastery website and some other useful information'
  )
  .option('-v, --verbose', 'verbose output of version command', false)
  .action((options) => printVersion(options.verbose))

program
  .command('scripts')
  .description('display all the available scripts in package.json')
  .action(() => printScripts())

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
  .action(() => genSchema())

add
  .command('component')
  .description('creates a new component (in the src/app/components/ directory)')
  .argument('<name>', 'component to add')
  .option('-p, --props', 'the component is generated with props', false)
  .option('-c, --client', 'the component is a client component', false)
  .action((name, options) => addComponent(name, options.props, options.client))

add
  .command('language')
  .description('creates a new language for i18n')
  .argument('<language>', 'language to add')
  .action((language) => addLanguage(language))

program.parse()
