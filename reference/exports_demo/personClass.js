// module wrapper function
// this gets called while import in main file i.e. index_main.js
// (function (exports, require, modules, __filename, __dirname){

// })

// console.log(__filename, __dirname);

class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`My name is ${this.name} and i am ${this.age}`);
    }
}

module.exports = PersonClass;