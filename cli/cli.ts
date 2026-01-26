#!/usr/bin/env tsx

import { program } from 'commander'
import siteInfo from '../package.json'
import printScripts from './commands/scripts'
import printVersion from './commands/version'

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

program.parse()
