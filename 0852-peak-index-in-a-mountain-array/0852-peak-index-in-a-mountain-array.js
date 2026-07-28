/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let l =0 ;
    let r = arr.length-1;

    while(l<r){
        let m = Math.floor((l+r)/2);

        if(arr[m] > arr[m+1]){
            r = m;
        }else{
            l = m+1;
        }
    }

    return l; 
};