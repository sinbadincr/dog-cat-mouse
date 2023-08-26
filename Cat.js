import { Mouse } from './Mouse.js';

function Cat(){
    this.stomach = [];
}

Cat.prototype.eat = function(animal) {
    if (anime instanceof Mouse){
        this.stomach.push(animal);
    } else {
        throw new Error('Cat can only eat mouse!')
    }
};

// module.export = Cat;
export {Cat}