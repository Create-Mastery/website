import chalk from 'chalk'
import { findProjectRoot } from './find-project-root'

export function requireProjectRoot(): string {
  const root = findProjectRoot()

  if (!root) {
    console.error(
      chalk.red(
        'Not inside a Create Mastery project. Run this command inside a project.'
      )
    )
    process.exit(1)
  }

  return root
}
