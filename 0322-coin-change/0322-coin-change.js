/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if(amount == 0) return 0;
    let dp = {}

    const match = (reAmount)=>{

        if(reAmount == 0) { return 0; };
        if(reAmount < 0) return -1;
        if(reAmount in dp) return dp[reAmount];
        let lowest = Infinity;


        for(let j = 0; j < coins.length; j++){
            let mas = reAmount - coins[j];
            let res = match(mas);
            if(res != -1){
                lowest = Math.min(res+1, lowest)
            }
        }
        dp[reAmount] = lowest == Infinity ? -1 : lowest;
        return dp[reAmount];
    };

    return match(amount);
};