/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(arr) {
    let maxPrev = arr[0];
    let minPrev = arr[0];

    let max = arr[0];

    for(let i = 1; i< arr.length; i++){
        let m = maxPrev * arr[i];
        let k = minPrev * arr[i];
        maxPrev = Math.max(Math.max(m, arr[i]), k);
        minPrev = Math.min(Math.min(m, arr[i]), k);

        max = Math.max(max, maxPrev);
        if(arr[i] == 0) {
            maxPrev = 1;
            minPrev = 1;
        } 
    }

    return max;
};