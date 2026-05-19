function ClimbStairs(n) {
    if(n <= 1) return n;

    const dp = new Array(n + 1);

    dp[1] = 1; // 1 way to reach step 1
    dp[2] = 2; // 2 ways to reach step 2

    for(let i =3; i <= n; i++) {
         // ways to reach i = ways from (i-1) + ways from (i-2)
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    console.log(dp);
    return dp[n];
}

console.log(ClimbStairs(5));

