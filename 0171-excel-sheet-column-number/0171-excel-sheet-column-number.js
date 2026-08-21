/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(col) {

    let sum = 0;
    if(col.length == 1) return col[0].charCodeAt(0) - 64;
    for(let i = 0; i < col.length; i++){
        let a = col[i].charCodeAt(0) - 64;
         sum = sum * 26 + a;
        }

    return sum;
};