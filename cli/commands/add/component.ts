import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import chalk from 'chalk'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const componentsDir = path.resolve(__dirname, '../../../src/components/')

export default function addComponent(
  componentName: string,
  props: boolean,
  client: boolean
) {
  const filePath = path.resolve(componentsDir, `${componentName}.tsx`)
  const dirPath = path.dirname(filePath)

  const rawName = componentName.trim()

  if (!rawName) {
    throw new Error('Component name cannot be empty')
  }

  const fileName = rawName.split('/').pop()

  if (!fileName) {
    throw new Error('Invalid component name')
  }

  const finalName = fileName
    .replace(/[-_](\w)/g, (_, c) => c.toUpperCase())
    .replace(/^\w/, (c) => c.toUpperCase())

  let content: string = ''

  if (fs.existsSync(filePath)) {
    console.log(
      chalk.red('The component'),
      chalk.reset(`${componentName}.tsx`),
      chalk.red('already exists')
    )

    return
  }

  if (client) {
    content += `'use client'\n\n`
  }

  if (props) {
    content += `type Props = {\n\n}\n\n`
  }

  content += `const ${finalName} = (${props ? '{  }: Props' : ''}) => {
  return (
    <div></div>
  )
}

export default ${finalName}`

  fs.mkdirSync(dirPath, {
    recursive: true,
  })
  fs.writeFileSync(filePath, content)

  console.log(
    chalk.blue('Component created -'),
    chalk.reset(`${componentName}.tsx`)
  )
  console.log(chalk.blue('Props             -'), chalk.reset(props))
}
