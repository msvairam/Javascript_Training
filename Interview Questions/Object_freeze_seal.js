const  obj = { name: 'vairamuthu', age: 36  };

Object.freeze(obj);

obj.name = 'miliran';
console.log(obj.name); // vairamuthu

obj.city = 'chennai';
console.log(obj.city) // undefined

delete obj.name;
console.log(obj.name) // vairamuthu

console.log(Object.isFrozen(obj)); // TRUE

const obj1 = {name: 'miliran', age: 3 };

Object.seal(obj1);

obj1.name = 'vairam';
console.log(obj1.name); // vairam

obj1.city = 'chennai'
console.log(obj1.city) // 'undefined'

delete obj1.name
console.log(obj1.name) // vairam