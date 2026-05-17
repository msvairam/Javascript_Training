// this refers to the object that is currently calling the function in case of regular function
// arrow function: this refers to the lexical parent of the function

// Case 1:

var age = 36;
var city = 'Madurai';
function displayAge() {
    console.log(this);
    console.log(this.age);
    console.log(this.city);
}

//displayAge();

// Case 2

// example 2

var age=20;
var person= {
    age: 25,
    city: "Blr", 
    displayAge: function(){
        console.log(this)
        console.log(this.age);
        console.log("city:", this.city);
    },
    nestedObject: {
        age: 40,
        city: "Pune",  
        displayAge: function(){
            console.log(this)
            console.log(this.age);
        }
    },
    arrowMethod: {
        age: 50,
        city: "Mumbai",  
        displayAge: () => {
            console.log(this)
            console.log(this.age);
        }
    }

}

person.displayAge();
person.nestedObject.displayAge();
person.arrowMethod.displayAge();

// Case 3:

var person = {
  age: 28,
  greet1: function () {
    console.log("greet 1", this);
    console.log("greet 1", this.age);
    const age = 48;
    const greet2 = function() {
      console.log("greet 2", this);
      console.log("greet 2", this.age);
    }
    const greet3 = () => {
      console.log("greet 3", this);
      console.log("greet 3", this.age);
    };
    greet2(); // This is a standalone function call.
    greet3();
  },
};

person.greet1();

const person2 = {
  name11: "Vairam",
  sayhello: () => {
    const innerNormal = () => {
      console.log(this.name11);
    };
    innerNormal();
  },
};
person2.sayhello.call({name11: 'test'});