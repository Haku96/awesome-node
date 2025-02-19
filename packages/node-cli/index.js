#!/usr/bin/env node

import { program } from 'commander'
import figlet from 'figlet'
import inquirer from 'inquirer'
import ora from 'ora'
import colors from 'picocolors'

const { blueBright, yellowBright } = colors

console.log(
  yellowBright(figlet.textSync('Node-CLI', { horizontalLayout: 'full' })),
)

program.version('1.0.0').description('My Node CLI')

program.action(() => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: `What's your name?`,
      },
      {
        type: 'list',
        name: 'choice',
        message: 'Choose an option:',
        choices: ['Option 1', 'Option 2', 'Option 3'],
      },
    ])
    .then(answers => {
      const spinner = ora(`Doing ${answers.choice}...`).start()

      setTimeout(() => {
        console.log(blueBright(`Hey there, ${answers.name} ${answers.choice}!`))
        spinner.succeed(blueBright('Done!'))
      }, 3000)
    })
})

program.parse(process.argv)
