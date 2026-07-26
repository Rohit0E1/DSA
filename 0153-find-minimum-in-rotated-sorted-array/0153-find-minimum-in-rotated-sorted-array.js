/**
 * @param {number[]} arr
 * @return {number}
 */
var findMin = function(arr) {
    let l = 0;
    let r = arr.length-1;

    while(l<r){
        let m = Math.floor((r+l)/2);

        if(arr[m] > arr[r]){
            l = m+1;
        }else{
            r = m;
        }
    }
    return arr[l];
};