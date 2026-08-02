/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
   let res = [];
   let ds = [];

   let i = j = 0;

   while(j < nums.length){
        while(ds.length && nums[j] > ds[ds.length-1]) ds.pop();
        ds.push(nums[j])

        if(j >= k-1){
            res.push(ds[0]);
            if(nums[i] == ds[0]) ds.shift()
            i++
        }
        j++;
   }
   return res;
}