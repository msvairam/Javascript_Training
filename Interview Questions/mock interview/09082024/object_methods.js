const obj = {
    name: 'Vairamuthu',
    age: 30,
    language: 'Angular',
};

const obj1 = {
    language: 'react',
};

const result = Object.assign({},obj1, obj);
/*
console.log(obj1);
console.log(result);

console.log({ ...obj, ...obj1 });
*/
console.log(Object.keys(obj));
console.log(Object.values(obj));

for(let [key, value] of Object.entries(obj)) {
    console.log(key, value);
}


const user = { name: 'Alice' };

Object.freeze(user);

user.name = 'Bob';
user.age = 30;
delete user.name; 

console.log(user);


const car = {
    brand: 'Toyota',
}

Object.seal(car);

car.brand = 'Honda';
delete car.brand;
car.model = 'Civic';

console.log(car);

console.log(Object.hasOwn(user, 'name'));
console.log(Object.hasOwn(user, 'age'));

const arr = [
    ['name', 'vairam'],
    ['age', 30],
]

console.log(Object.fromEntries(arr));



const animal = {
  speak() {
    console.log("Animal speaks");
  }
};

const dog = Object.create(animal);
console.log(dog);
dog.speak();

console.log(Object.getOwnPropertyNames(user));

const newObj = Object.assign({}, user, car);

newObj.model = 'civic';

newObj.name = 'Muthu';

console.log(newObj);

newObj.defineProperties('name', {
    set: () => {

    },
    get: () => {
        return 'test';
    }
})

const defineObj = Object.defineProperties({}, {
    user: {
        enumerable: false,
        configurable: false,
        writable: false,
        value: 'miliran',
    },
});




defineObj.user = 'muthu';
console.log(defineObj);