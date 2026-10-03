/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (arr) {
    if (arr.length == 1) return arr[0];
    let l = arr.length;
    let newArr = [...arr];


    for(let i = 0; i < l -1; i++ ){
        newArr[i + 2] = Math.max(newArr[i+2], newArr[i] + arr[i+2]);
        newArr[i + 3] = Math.max(newArr[i+3] ,newArr[i] + arr[i+3]);
    }
    

    return Math.max(newArr[newArr.length-3], newArr[newArr.length-4]);
};