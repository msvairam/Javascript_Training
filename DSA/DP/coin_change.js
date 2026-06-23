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
    return dp[amount] === Infinity ? -1:  dp[amount];
}

console.log(coinChangeWithCoins([1, 3, 4], 6));
console.log(coinChange([1, 5, 10, 25], 36)); // 3 (25+10+1)
//console.log(coinChange([2], 3));    

function coinChangeWithCoins(coins, amount) {
    if(coins.length < 1) return -1;

    const dp = Array.from({length : amount + 1}).fill(Infinity);
    const usedCoins = Array.from({length : amount + 1}).fill(-1);

    dp[0] = 0;

    for(let i =0; i <= amount; i++) {
        for(let coin of coins) {
            if(coin <= i && dp[i - coin] + 1 < dp[i]) {
                dp[i] = dp[i - coin] + 1;
                usedCoins[i] = coin;
            }
        }
    }
   const result = [];
    let remaining = amount;
    while(remaining > 0) {
        result.push(usedCoins[remaining]);
       remaining -= usedCoins[remaining];
    }

    console.log(result);
    return dp[amount] === Infinity? -1: dp[amount];
}