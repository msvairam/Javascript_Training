function coinChangeGreedy(coins, amount) {
    coins.sort((a, b) =>  b  -a);

    const result = [];
    let remaining = amount;

    for(let coin of coins) {
        while(remaining >= coin) {
            result.push(coin);
            remaining -= coin;
        }
    }

    return (remaining === 0 )? result : null;
}

console.log(coinChangeGreedy([1, 3, 4], 6));