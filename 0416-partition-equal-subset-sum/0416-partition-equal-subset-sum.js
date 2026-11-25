/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }

    if (sum % 2 != 0) return false;

    let sum1 = sum / 2;
    let len = nums.length;

    let map = Array.from({length: sum1+1}, ()=> Array(nums.length).fill(null));

    function recur(sum1, st) {
        if (sum1 == 0) {
            return true;
        }
        if (sum1 < 0) return false;


        if (map[sum1][st] != null) return map[sum1][st];
        for (let j = st; j < len; j++) {
            let new1 = sum1 - nums[j];

            if (recur(new1, j + 1)) {
                return map[sum1][st] = true;
            }
        }
    
    return map[sum1][st]= false;
}

return recur(sum1, 0);
};