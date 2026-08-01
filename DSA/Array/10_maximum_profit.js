function maximumProfile(prices) {
    let buy = prices[0];
    let sell = prices[0];
    let profit = 0;

    for (let i = 0; i < prices.length; i++) {
        let cost = prices[i] - buy;
        if (profit <= cost) {
            profit = cost;
            sell = prices[i];
        }
        buy = Math.min(buy, prices[i]);
    }
    return {buy, profit, sell};
}
console.log(maximumProfile([7, 1, 5, 3, 4, 6]));
// Question may only maximum profile or with buying and selling values also