function factorial(n) {
    // Base Case
    if (n === 0 || n === 1) return 1;
    
    // Recursion Case
    return n * factorial(n - 1);
}

console.log(factorial(5));