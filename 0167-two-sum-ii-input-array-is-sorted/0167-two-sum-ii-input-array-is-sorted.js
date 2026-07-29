/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(arr, target) {
   let l = 0;
    let r = arr.length-1;

    while (arr[l]+arr[r] != target){
        let sum = arr[l]+arr[r];

        if (sum == target) return [l+1, r+1]

        if(sum > target){
            r = r-1;
        }else{
            l = l+1;
        }
    }

    return [l+1,r+1]
};