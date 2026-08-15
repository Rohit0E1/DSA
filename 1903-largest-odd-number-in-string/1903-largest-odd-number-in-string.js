/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    let b;
    for(let i = 0; i < num.length; i++){
        if(num[i] % 2 != 0) {b = i 
        console.log(i)};
    }
    if(b==0) return num[0];
    return b ? num.slice(0,b+1) : "";
};