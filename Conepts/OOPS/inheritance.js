class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(`${this.name} is eating`);
    }   

    speak() {
        return '...'
    }

}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    speak() {
        return `${this.name} say: Woof`;
    }
}

class Cat extends Animal {
    speak() {
        return `${this.name} say: Meow`;
    }
}

const dog = new Dog('Rex');
const cat = new Cat('Whiskers');

console.log(dog.eat());

console.log(dog.speak());
console.log(cat.speak());
