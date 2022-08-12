const chalk = require('chalk')
const validator=require('validator')

// console.log(chalk.blue('hello world'))
// console.log(chalk.blue.underline('hello world'))
// console.log(chalk.blue.inverse('hello world'))
// console.log(chalk.green.inverse(' success'))
// console.log(chalk.red.inverse(' failed'))

const res = validator.isEmail('tahir@gmail.com')
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res))