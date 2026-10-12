/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let len = coins.length;
    let arr = new Array(amount + 1).fill(Infinity);
    arr[0] = 0;

    for(let i = 1; i <= amount; i++){
        for(let j = 0; j < len; j++){
            let reAmu = i - coins[j];
            if(reAmu >= 0){
                arr[i] = Math.min(arr[i], 1 + arr[reAmu]);
            };
        };
    };
    return arr[amount] == Infinity ? -1 : arr[amount]
};