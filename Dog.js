// var chalk = require('chalk');
import { Chalk as chalk } from "chalk";


function Dog(name) {
    this.name = name;
    this.stomach = [];   
}

Dog.prototype.eat = function(cat){
    this.stomach.push(cat);
};

Dog.prototype.sayHi = function() {
    console.log('Hi! Im a dog. My name is ' + chalk.blue(this.name));
};

// module.export = Dog;
export {Dog}