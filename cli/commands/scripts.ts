import chalk from 'chalk'
import siteInfo from '../../package.json'
import { createMasteryASCIIArt } from '../utils/art'

export default function printScripts() {
  console.log(chalk.blue(createMasteryASCIIArt))
  console.log(chalk.blue('Available scripts:'))
  console.log(chalk.blue('──────────────────────────────────────────'))
  Object.entries(siteInfo.scripts).forEach(([key, value]) => {
    console.log(
      `${chalk.blue(key.padEnd(10))} ${chalk.blue('─')} ${chalk.reset(value)}`
    )
  })
  console.log()
}
