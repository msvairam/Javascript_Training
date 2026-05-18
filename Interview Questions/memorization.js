// Understand memoization is JavaScript:
// Memoization is a optimization technique of remembering the results of a function call for the same input.

function sum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

function memorization(fun) {
    const cache = {}
    return function(input) {
        if (!cache[input])  {
            console.log('call');
            const output = fun(input);
            cache[input] = output;
        }
        return cache[input];
    }
}

const mem = memorization(sum);

console.log(mem(100));
console.log(mem(100));
console.log(mem(500));
console.log(mem(100));