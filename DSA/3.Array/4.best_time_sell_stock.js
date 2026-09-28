const prices = [7,6,4,3,1];

var maxProfit1 = function(prices) { // my approach

    if(prices.length < 0) {
        return 0;
    }

    let buy = prices[0];
    let sell = prices[0];
    let profit = 0;

    for(let price of prices) {
        let cost = price - buy;
        if (profit < cost) {
            profit = cost;
            sell = price;
        }
        buy = Math.min(buy, price);
    }
    return profit;
};

console.log(maxProfit(prices));

var maxProfit = function(prices) {

    let buy = prices[0];
    let maxProfit = 0;

    for(let i = 1; i < prices.length; i++) {
        if (maxProfit <  prices[i] - buy) {
            maxProfit =  prices[i] - buy;
        }
        if(buy > prices[i]) {
            buy = prices[i];
        }
    }
    return profit;
};