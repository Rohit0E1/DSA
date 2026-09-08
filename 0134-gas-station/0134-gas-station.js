/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let sum = 0;
    let curr = 0;
    let ans = 0;

    for(let i =0; i<gas.length; i++){
        let gain = gas[i] - cost[i];
        curr = curr + gain;
        sum = sum + gain;

        if(curr < 0){
            curr = 0;
            ans = i+1;
        }
    }

    return sum < 0 ? -1 : ans;
};