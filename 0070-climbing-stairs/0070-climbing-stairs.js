/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {

    let map = new Map();
    function dp(n) {
        if(n < 2) return n;
        
        if(!map.has(n)) map.set(n, dp(n-1) + dp(n-2));

        return map.get(n);
    }

    return dp(n+1);
};