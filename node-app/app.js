// command
//npm init to create pakage.json file
//nodemon fileName.js

// const add = require('../node-app/utils');
// const messageShow = require('../node-app/utils');
// const sum = add(19, 5);
// console.log(sum)
// console.log(messageShow)

// const validator = require('validator')

// console.log(validator.isEmail('mindgo.sharma@gmail.com'))
// console.log(validator.isEmail('mindgo.sharma@gmail.com11'))

// console.log(validator.isURL('https://google.com'))
// console.log(validator.isURL('https/google.com'))

// const chalk = require('chalk');
// console.log(chalk.blue('Hello world!'));

// const chalk = require('chalk')
// const successMsge = chalk.green('Success!!')
// console.log(successMsge)

const yargs = require('yargs');
yargs.version('1.0.0')

// console.log(process.argv)
// console.log(yargs.argv)

yargs.command({
    command: 'Remove',
    description: 'Remove notes',
    handler: ()=> {
         console.log('Remove notes')
    }

})


console.log(yargs.argv)