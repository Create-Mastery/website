#!/usr/bin/env tsx

import { program } from 'commander'
import siteInfo from '../package.json'
import addComponent from './commands/add/component'
import addLanguage from './commands/add/language'
import { genSchema } from './commands/generate-schema'
import printScripts from './commands/scripts'
import printVersion from './commands/version'

const add = program.command('add').description('add a language or component')
const gen = program.command('gen').description('generate the dictionary schema')

program.version(siteInfo.version)
program.name('cm')

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
