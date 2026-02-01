import fs from 'node:fs'
import path from 'node:path'

export function findProjectRoot(startDir = process.cwd()): string | null {
  let dir = startDir

  while (dir !== path.parse(dir).root) {
    if (fs.existsSync(path.join(dir, '.create-mastery-root'))) {
      return dir
    }
    dir = path.dirname(dir)
  }

  return null
}
