/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(arr, target) {
    let l = 0;
    let r = arr.length-1;

    while(l<r){
        let m = Math.floor((l+r)/2)

        if(arr[m] < target){
            l=m+1;
        }else{
            r = m
        }
    }
    console.log(l,"--------------",arr[l])
    if(arr[l] == target){
        let i = l;
        while(arr[i]==arr[l]){
            i++;
        }
        return [l,i-1]
    }
    return [-1,-1]
};