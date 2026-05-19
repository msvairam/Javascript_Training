// Fibonacci — Without DP (Slow ❌)

function fib1(n) {
    if (n <= 1) return n;
    return fib1(n -1) + fib1(n -2);
}

console.log(fib1(40));

// 2️⃣ Fibonacci — Top-Down Memoization ✅ - O(n) stack + cache - Slightly slower - Easier to think   

function fib2(n, memo = {}) {
    if (n <= 1) return n;
    if (memo[n]) return memo[n];

    memo[n] = fib2(n - 1,  memo) + fib2(n -2, memo);

    return memo[n];
}

console.log(fib2(40));

// 3️⃣ Fibonacci — Bottom-Up Tabulation ✅ - O(n) table - Slightly faster - More efficient

function fib3(n) {
    if (n <= 1) return n;

    const dp = new Array(n -1);
    dp[0] = 0;
    dp[1] = 1;

    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    
    return dp[n];
}

console.log(fib3(40))