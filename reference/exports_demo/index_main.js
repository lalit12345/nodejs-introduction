const person = require('./person');
const PersonClass = require('./personClass');

console.log(person);

const personClass = new PersonClass('lalit patil', 30);

personClass.greeting();