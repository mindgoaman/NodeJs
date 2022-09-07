// const add = require('../node-app/utils');
// const messageShow = require('../node-app/utils');
// const sum = add(19, 5);
// console.log(sum)
// console.log(messageShow)

//npm init to create pakage.json file
const validator = require('validator')

console.log(validator.isEmail('mindgo.sharma@gmail.com'))
console.log(validator.isEmail('mindgo.sharma@gmail.com11'))

console.log(validator.isURL('https://google.com'))
console.log(validator.isURL('https/google.com'))