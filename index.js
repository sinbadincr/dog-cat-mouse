import { Cat } from "./Cat";
import { Mouse } from "./Mouse";
import { Dog } from "./Dog";

var cat = new Cat();
var mouse = new Mouse('Mickey');
var dog = new Dog();
try {
    cat.eat(dog);
} catch (error) {
    console.log('Error while cat eating a dog\n');
}
console.log(cat);