/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = 0;
    let max = 0;

    let res = 0;

    for(let i = 0; i < prices.length; i++){
        min = prices[i] < prices[min] ? i : min;

        if(prices[i] > prices[min]){
            res = (prices[i] - prices[min]) + res;
            min = i;
        }
    }

    return res
};