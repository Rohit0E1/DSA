/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {

    let max = -Infinity;
    let prev = 0;

    for(let i = 0; i <= nums.length-1; i++){
        if(nums[i] + prev < nums[i]){
            prev = nums[i];
        }else{
            prev = nums[i] + prev;
        }
        if(prev > max){
            max = prev;
        }
    }

    return max;
};