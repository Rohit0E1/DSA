/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(arr) {
    if (arr.length == 1) return arr[0]
    let l = 0;
    let r = arr.length-1;

    while (l<r){
       let m = Math.floor(l+((r-l)/2));
        if(arr[m] == arr[m+1]){
            if((r-m)%2 == 1){
                r = m -1;
            }else{
                l = m
            }
        }else if(arr[m] == arr[m-1]){
            if((m-l)%2 == 1){
                l = m+1;
            }else {
                r = m;
            }
        }else {
            return arr[m];
        }
    }
    return arr[l]
};