/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (arr) {
    if (arr.length == 1) return arr[0];
    let l = arr.length;

    const loop = ( st, len) => { 
    let prev1 = 0
    let res = 0
    for(let i = st ; i <= len; i++ ){
        let temp = res;
        res = Math.max(arr[i] + prev1 , res);
        prev1 = temp
    }

    return res;
    }

    let a = loop( 0,l - 2);
    let b = loop( 1,l - 1);

    console.log(a,b)

    return Math.max(a,b)

};