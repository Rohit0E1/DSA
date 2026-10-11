/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if(amount == 0) return 0;
    let arr = [0];


    const match = (reAmount)=>{
        if(reAmount < 0) return -1;
        if(reAmount == 0) return 0;
        if(arr[reAmount]) return arr[reAmount];
        let lowest = Infinity;

        for(let j = 0; j < coins.length; j++){
            let mas = reAmount - coins[j];
            let res = match(mas);
            if(res != -1){
                lowest = Math.min(res+1, lowest)
            }
        }
        return lowest == Infinity ? -1 : lowest;
    };


    for(let i = 1; i <= amount; i++){
        let min = match(i);
        arr.push(min);
    }

    return arr[amount];
};