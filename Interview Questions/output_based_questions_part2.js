console.log(x); // Undefined

getName(); // Vanakkam Javascript

var x = 7;

function getName() {
    console.log('Vanakkam Javascript');
}

console.log(x) // 7

/***************************** */

getName(); // getName is not function

var getName = () => {
    console.log('Vanakkam Javascript');
}

/************************ */

//Hoisting 
/* We can access variable and function, even before initialization in your code.*/

var x = 1;
a(); // 10
b(); // 100

console.log(x); // 1

function a() {
    var x = 10;
    console.log(x);
}

function b() {
    var x = 100;
    console.log(x);
}


/********************************** */
/* Js Engine create global execution context and allocates memory to call variables and functions
even before a single line of code executed.*/

/* It tries to put a placeholder placed in memory that special keyword is UNDEFINED.*/

/* If not defined in memory context phase. then x is not defined
var a;
undefined;
*/

console.log(a); // undefined
var a = 10;

a === undefined // TRUE

console.log(b); // b is not defined.
b = 20;

console.log(c);
var c;


