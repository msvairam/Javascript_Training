/*5️⃣ Coin Change Problem

Problem: Given coins and an amount, find the
minimum number of coins to make that amount.*/

function coinChange(coins, amount) {
    if(coins.length < 1) return -1;

    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    
    for (let i = 1; i <= amount; i++) {
        for (coin of coins) {
            if (coin <= i) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    console.log(dp);
    return dp[amount] === Infinity ? -1:  dp[amount];
}

console.log(coinChange([1, 3, 4], 6));
//console.log(coinChange([1, 5, 10, 25], 36)); // 3 (25+10+1)
//console.log(coinChange([2], 3));    