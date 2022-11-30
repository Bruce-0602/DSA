
/*
Buying at the lowest and selling at the highest will result in the max profit
so keep track of the lowest price, the current profit and the max profit
*/

var maxProfit = function(prices) {
    let lowestPrice = prices[0];
    let maxProfit = 0; 

    for (let i = 0; i< prices.length; i++){
        let currPrice = prices[i];
        // update lowest price if currPrice is lower than previously recorded price
        if (currPrice < lowestPrice) lowestPrice = currPrice;
        // update maxProfit if currPrice is lower than previously recorded price
        if (currPrice - lowestPrice > maxProfit) maxProfit = currPrice - lowestPrice;
    }   

    return maxProfit;
};