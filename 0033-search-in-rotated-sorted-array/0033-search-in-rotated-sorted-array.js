/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l = 0;
    let r = nums.length-1;

    while(l <= r){
        let middle = Math.floor(l+((r-l)/2));

        if(nums[middle]==target){
            return middle;
        }
        if(nums[l] <= nums[middle]){
            if(target <= nums[middle] && nums[l] <= target){r = middle-1}
           else{
            l = middle+1;
           }
        }else{
            if(target >= nums[middle] && target <= nums[r]){l = middle+1}
            else{
            r = middle-1;
            }
        }

        console.log(
            l ,"+++++++++++++++++",r
        )
    }
    return -1;
};