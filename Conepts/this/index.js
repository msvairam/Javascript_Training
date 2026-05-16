//"use strict"
// this in global space

console.log(this);

// this inside a function

function x() {
    // This value dependes on strict / Non strict Mode
    console.log(this);
}

// this inside non-strict mode ( this substitution )

// If the value of this keyword is undefined or null
// This keyword will be replaced with global Object
// Only in non-strict mode

// This keyword value depends on how function is called (window)

x();
this.x();
window.x();

// This Inside Object's Method (not function)

const student = {
    name: 'vairamuthu',
    a: 5,
    printName: function() {
        console.log(this);
        console.log(this.name);
        console.log(this.a);
    },
}

student.printName();

const student2 = {
    name: 'Miliran',
}
student.printName.call(student2);

// Call Apply Bind methods (sharing methods)

// This inside arrow function

const obj = {
    a: 10,
    x: function () {
        return {
            y: () => {
                console.log(this);
            }
        }
    }
}

obj.x().y();

const obj2 = {
    name: 'vairam',
    a: 5, 
    b: 3,
    sum: () => {
        console.log(this.a + this.b);
    }
};

console.log(obj2.sum());
student.printName();
// Arrow function don't provide their own this binding (it retains the this value of the enclosing lexical context)


