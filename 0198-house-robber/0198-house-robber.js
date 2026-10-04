/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (arr) {
    if (arr.length == 1) return arr[0];
    let l = arr.length;
    let prev1 = arr[0]
    let res = Math.max(arr[0], arr[1]);


    for(let i = 2   ; i < l; i++ ){
        let temp = res;
        res = Math.max(arr[i] + prev1 , res);
        prev1 = temp
    }
    

    return res;
};