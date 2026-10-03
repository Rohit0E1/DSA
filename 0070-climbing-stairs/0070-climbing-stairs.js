/**
 * @param {number} n
 * @return {number}
 */

let map = new Map();
var climbStairs = function (n) {
    if (n < 3) return n;

    if(!map.has(n)){
    let k = climbStairs(n - 1) + climbStairs(n - 2);
    map.set(n ,k);
    } 

    return map.get(n);
};