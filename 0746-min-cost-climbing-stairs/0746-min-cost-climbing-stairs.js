/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    cost.push(0);
    let n = cost.length-1;
    let map = new Map();

    function dp(n) {
        if(n < 0) return -1;
        if(n==0) return cost[0]
        if(map.has(n)) {return map.get(n)}
        
        let l = dp(n-1);
        let r = dp(n-2);


        let comp1 = r < 0 ? 0 : r;
        let comp2 = l < 0 ? 0 : l;
        let k = Math.min(comp1, comp2);

        map.set(n, k+cost[n]);
        return  map.get(n);
    }

    return dp(n);
};