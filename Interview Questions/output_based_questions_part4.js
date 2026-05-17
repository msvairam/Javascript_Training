// Hoisting in JavaScript is a process in which the variable and function declarations are moved to the top of their scope before code execution.
/*,
var value = 10;

function getValue() {
  if (value == undefined) {
    value = 6;
    return value;
  }
  return 10;
}

console.log(getValue());

// SetTimeout in Javascript

(function () {
  console.log("Hello");
  setTimeout(() => {
    console.log(2);
  }, 1000);
  setTimeout(() => {
    console.log(3);
  }, 0);
  console.log(4);
})();

//closure in JS
// A closure is a function having access to the parent scope, even after the parent function has closed.

function test() {
  for (var i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}

test();

let rate = 10;
function getRate() {
  console.log("rate", rate); // output ??
  if (rate == undefined) {
    let rate = 6;
    return rate;
  } else {
    return 11;
  }
}

console.log(getRate()); */

/*  Example  explaining many things together about this keyword, arrow function, normal function, call ) */

var age = 20;

var person = {
    age: 25,
    city: "Blr",
    displayAge: function() {
        console.log(this);
        console.log("age:", this.age);
        console.log("city:", this.city);
    },
    nestedObject: {
        age: 40,
        city: "Pune",
        displayAge: function() {
            console.log(this);
            console.log("age:", this.age);
            console.log("city:", this.city);
        }
    },
    arrowMethod: {
        age: 50,
        city: "Mumbai",
        displayAge: () => {
            console.log(this);  // arrow functions do not have their own `this`
            console.log("age:", this.age);  // this.age here refers to the global scope `age`
        }
    }
}

person.displayAge(); 
person.nestedObject.displayAge(); 
person.arrowMethod.displayAge(); 

var anotherPerson = { age: 30, city: "Delhi" };

person.displayAge.call(anotherPerson);  // `this` refers to anotherPerson

// Using call with an arrow function has no effect since arrow functions do not bind `this`
person.arrowMethod.displayAge.call(anotherPerson);  // `this` is still the global scope due to arrow function
