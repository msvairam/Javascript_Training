function fib(n) {
    
    // Base Case
    if (n == 0) return 0;
    if (n == 1) return 1;

    // Recursion Case
    return fib(n - 1) + fib(n - 2);
}

console.log(fib(6));

