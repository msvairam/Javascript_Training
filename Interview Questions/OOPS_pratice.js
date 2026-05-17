class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `My name ${this.name} age is ${this.age}`;
  }
}

const person1 = new Person("Vairamuthu", 50);
console.log(person1.getDetails());

function Car(name, color) {
  this.name = name;
  this.color = color;
}

Car.prototype.getDetails = function () {
  return `My Car Name : ${this.name} color is: ${this.color}`;
};

const carObj = new Car("Maruthi", "Red");

console.log(carObj.getDetails());

let obj1 = { name: "vairam", age: 27 };
//let obj2 = { city: "BLR" };

// Way1
//obj1.__proto__ = obj2;

let obj2 = Object.create(obj1, {city : { value: 'BLR' }, prop1: { value: 'prppp' }});

console.log("obj2",obj2);

obj1.city = "Chennai";
console.log(obj1.city);
console.log(obj2);

function Parent(name, age, house) {
  this.name = name;
  this.age = age;
  this.house = house;
}

Parent.prototype.getDetails = function() {
  console.log(`Name: ${this.name} Age: ${this.age}`);
};

function Child(name, age, school) {
    Parent.call(this, name, age);
    this.school = school;
}

Child.prototype = Object.create(Parent.prototype);

Child.prototype.getSchoolDetails = function() {
    console.log(`Name ${this.name} Age: ${this.age} school ${this.school}`);
}

const ch = new Child('Vairam', 36, 'MTN');

ch.getDetails();
ch.getSchoolDetails();
