/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let arr = nums.sort((a,b)=> a-b);
    let ans =[];
    for(let i =0; i< arr.length; i++){
        if(arr[i] != arr[i-1]){
        twoSum(arr, i , ans)
    }}
    return ans
};

var twoSum = function(arr, x, ans) {
   let l = x+1;
    let r = arr.length-1;

    while (l < r){
        let sum = arr[l]+arr[r] + arr[x];

        if(sum > 0){
            r = r-1;
        }else if (sum < 0){
            l = l+1;
        }else{
            ans.push([arr[l], arr[r], arr[x]]);
            l++; r--;
            while(l<r && arr[l]==arr[l-1]) l++;
        }
    }
};