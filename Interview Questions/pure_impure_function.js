// pure function always gives the same output for the same input. 
// It always return the same result when you pass the same arguments
// output of pure function should not have any side effect: it means that any other operation should not affect the result. 

// example of the side effects are,

// 1)Mutating(changing) the input itself.
// 2) Querying/Updating DOM
// 3 )Logging(even in the console)
// 4) Making an XHR/fetch call.

function greetings(name) {
    return `Hello ${name}`;
}

console.log(greetings('Vairamuthu'));

let message = 'good morning';

function greetings1(name) {                  // this function has side effect, this is impure. because
    return `Hello ${name} ${message}`;       // result will be changed based on message variable if it is changed. 
}

console.log(greetings1('Miliran'));
message= 'good evening';
console.log(greetings1('Miliran'));