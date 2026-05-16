{
    let a = 1;
    let b = 2;

    console.log(a);
    console.log(b);
}

console.log(a); // a is not defined. stop the Js execution
console.log(b); //  this line of code, not run

/*************************** */

console.log(a); // undefined store. we can access before declaration.
var a = 5; 

console.log('end'); // this line of code will run.

/******************************* */
// Let & Const vriables are in stored a temporal dead zone. Untill unless we initialize
// some value after that we can access.

// Temporal Dead Zone is concept is Javascript that relates to the hoisting of the variables
// and the visbility of variables declared with let and const. In the TDZ a variable exists 
//  but is cannot be accessed until it is not declared.

console.log(a); // Cannot access 'a' before initialization
let a = 5;

console.log('end');  // this line of code will not run.

/***************************** */

// Shadowing...
// Question 1:

// Two phase 1)  Memory Creation Phase 2) Execution

var x  = 20; // Global scope x is 20 

function foo() {
    console.log(x); //  undefined. local scope undefined. 
    var x = 10;
}

foo();

// Question 2: 

var x  = 20;

function foo() {
    console.log(x); // x is 20
     x = 10;
}
console.log(x); // x is 20 
foo();
console.log(x); //  x is 10

console.log('end');

// Question 3:

// Only Const, var, let for mermory creation phase. another wise not

function foo() {
    console.log(x); //  x is not defined
     x = 10;
}
foo();

console.log('end');

// Question 4:

        // Execution phase. this will create x = 10;
        function foo() {
            x = 10; //  if we use strict or type module, than x is not defined.
            console.log(x); //  x is 10
        }
        foo();

        // var x = 10; x = 10 // Both are not same. because var is functional scope variable.
        console.log(x) // we can access here also. because of global variable


//  Question 5:

        function foo() {
            x = 10;
            console.log(x);
        }

        console.log(x); //  x is not defined. because. memory creation and exection phase not exit x.

        foo();

        /******************* */

// Question 6:

        function foo() {
            x = 10;
            console.log(x);
        }

        foo();

        console.log(x); //  x is 10; Exection phase,  it will get value 10;

        /************************* */
// Question 7:

        x = 20;
        function foo() {
            x = 10;
            console.log(x);
        }

        console.log(x); //  x is 20 from global scope.

        foo();

        console.log(x); // x is 10. 10 override 20 from global scope.


        /****************************** */
// Question 8:
                
        'use strict'

        var x  = 20; //  global scope variable
        function foo() {
        var x = 10; //  function scope variable
        console.log(x); // x is 10;
        }

        console.log(x); // x is 20;

        foo();

        console.log(x); // x is 20


/************************************** */

// Question 9:


    'use strict'

    var x  = 20; //  global scope variable
    function foo() {
    console.log(x); // undefined  only memory creation phase of x. but undefined.
    var x = 10; //  function scope variable
    }

    console.log(x); // x is 20;

    foo();

    console.log(x); // x is 20

console.log('end');

/********************************** */

// Question 10

    foo(); //  calling foo pring >>  Execution Phase;
    // foo undefined, so overwrite function in foo variable. variable to function
    var foo = 10; //  function to variable
    function foo() { // Memory creation phase, Ignore it.
        console.log('calling foo');
    }

    foo(); //  foo is not a function, it is variable. Getting blocked.

/*************** */

// Question 11

function outer() {
    function inner() {
        console.log(x);
    }
    const x  = 5; 
    return inner;  // Return inner function with x value 5 using closure111
}

const inner1 = outer();
inner1(); // 5

/******************************* */

const x  = 5;
function outer() {
    function inner() {
        
        console.log(x); // 5
        console.log(y); //  10
        const z = 15;
        return function moreInner () {
            console.log(x); // 5
            console.log(y); // 10
            console.log(z); //15
        }
    }
    const y = 10;
    return inner;
}

const inner = outer();
console.dir(inner); // Return inner function with y value of closure of outer function
//inner(); // 5
const moreInner = inner();

console.dir(moreInner); //  Return moreInner function with y value of outer closure and x value of inner closure.