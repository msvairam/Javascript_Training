// Prototype in JavaScript
// the function that is used with new keyword: is called constructor function

// prototype is used to shared method with all the instances created from constructor function. 

function Person(fname, lname) {
    this.fname = fname;
    this.lname = lname;
}

const person1 = new Person('vaira', 'muthu');
const person2 = new Person('Masana', 'muthu');

Person.prototype.getDetails = function() {
    console.log(`F Name: ${this.fname} L Name: ${this.lname}`);
}

person1.getDetails();
person2.getDetails();