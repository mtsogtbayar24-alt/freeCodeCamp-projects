const {add, subtract, multiply, divide} = require("./math");
console.log(add(5, 7));
console.log(multiply(100, 73));
console.log(subtract(100, 73));
console.log(divide(100, 73));

const {name, age} = require("./user")
console.log(`Hi ${name}, age ${age}.`);