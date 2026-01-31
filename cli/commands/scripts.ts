import chalk from 'chalk'
import siteInfo from '../../package.json'
import { createMasteryASCIIArtSmall } from '../utils/arts'

export default function printScripts() {
  console.log(chalk.blue(createMasteryASCIIArtSmall))
  console.log(chalk.blue('Available scripts:'))
  console.log(chalk.blue('──────────────────────────────────────────'))
  Object.entries(siteInfo.scripts).forEach(([key, value]) => {
    console.log(
      `${chalk.blue(key.padEnd(10))} ${chalk.blue('─')} ${chalk.reset(value)}`
    )
  })
  console.log()
}
