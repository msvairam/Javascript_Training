1️⃣ What is Dynamic Programming?
    Dynamic Programming is an optimization technique that solves complex problems by:

    Breaking them into smaller subproblems
    Storing the results of subproblems (so we don't recompute)
    Building the final solution from stored results


🔑 Key Idea: Never solve the same subproblem twice!

A problem is a good DP candidate if it has:

    Property                            Meaning

    Optimal Substructure -> Solution built from optimal solutions of subproblems
    Overlapping Subproblems -> Same subproblems solved repeatedly

    Example: Fibonacci(5)
                    fib(5)
                   /      \
               fib(4)    fib(3)
              /     \    /    \
          fib(3) fib(2) fib(2) fib(1)
          /    \
      fib(2) fib(1)

    ❌ Without DP → fib(3) computed TWICE, fib(2) THREE times!
    ✅ With DP    → compute once, store, reuse!

3️⃣ Two Approaches
🔼 Top-Down (Memoization)

    Start from the big problem
    Recurse down to subproblems
    Cache results as you go

    fib(5)
    → fib(4) + fib(3)
    → check cache first before computing!


🔽 Bottom-Up (Tabulation)

    Start from the smallest subproblem
    Build up to the big problem
    Store results in a table (array)

    fib(0)=0, fib(1)=1
    fib(2)=1, fib(3)=2
    fib(4)=3, fib(5)=5 ✅

5️⃣ Classic DP Problems

    Problem                     Type
    Fibonacci                   1D DP
    Climbing Stairs             1D DP
    Knapsack                    2D DP
    Longest Common Subsequence  2D DP
    Coin Change                 1D DP

    💻 Coding Examples in JS

1️⃣ Fibonacci — Without DP (Slow ❌)
jsfunction fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2); // recomputes same values!
}

console.log(fib(40)); // very slow! O(2^n)

2️⃣ Fibonacci — Top-Down Memoization ✅
jsfunction fib(n, memo = {}) {
  if (n <= 1) return n;
  if (memo[n]) return memo[n]; // ✅ return cached result

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo); // store result
  return memo[n];
}

console.log(fib(40)); // 102334155 — instant! O(n)

🔑 memo = {} acts as a cache — check before computing!


3️⃣ Fibonacci — Bottom-Up Tabulation ✅
jsfunction fib(n) {
  if (n <= 1) return n;

  const dp = new Array(n + 1);
  dp[0] = 0;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]; // build from bottom up
  }

  return dp[n];
}

console.log(fib(40)); // 102334155 ✅ O(n) time, O(n) space

4️⃣ Climbing Stairs Problem

Problem: You can climb 1 or 2 steps at a time.
How many distinct ways to reach step n?

jsfunction climbStairs(n) {
  if (n <= 2) return n;

  const dp = new Array(n + 1);
  dp[1] = 1; // 1 way to reach step 1
  dp[2] = 2; // 2 ways to reach step 2

  for (let i = 3; i <= n; i++) {
    // ways to reach i = ways from (i-1) + ways from (i-2)
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

console.log(climbStairs(5)); // 8 ways
console.log(climbStairs(4)); // 5 ways

🔑 Same pattern as Fibonacci! — DP pattern reuse!


5️⃣ Coin Change Problem

Problem: Given coins and an amount, find the
minimum number of coins to make that amount.

jsfunction coinChange(coins, amount) {
  // dp[i] = min coins needed to make amount i
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0; // 0 coins needed for amount 0

  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (coin <= i) {
        // use this coin + min coins for remaining amount
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
}

console.log(coinChange([1, 5, 10, 25], 36)); // 3 (25+10+1)
console.log(coinChange([2], 3));              // -1 (impossible)

6️⃣ Longest Common Subsequence (LCS)

Problem: Find the length of the longest subsequence
common to both strings.

jsfunction lcs(str1, str2) {
  const m = str1.length;
  const n = str2.length;

  // 2D dp table
  const dp = Array.from({ length: m + 1 },
             () => new Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1; // characters match!
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]); // take best
      }
    }
  }

  return dp[m][n];
}

console.log(lcs("ABCBDAB", "BDCAB")); // 4 (BCAB or BDAB)
console.log(lcs("AGGTAB", "GXTXAYB")); // 4 (GTAB)

DP Formula for Climbing Stairs (1,2,3 steps):
dp[i] = dp[i-1] + dp[i-2] + dp[i-3]

DP Formula for Coin Change:
dp[i] = Math.min(dp[i], dp[i - coin] + 1)