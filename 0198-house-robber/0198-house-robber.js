/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (arr) {
    let l = arr.length - 1;
    let map = new Map();

    function climbDown(n) {
        if (n > l) return 0;
        if (n == l) return arr[n];
        if(map.has(n)) return map.get(n);

        let m = climbDown(n + 2);
        let r = climbDown(n + 3);

        let k = Math.max(m, r);

        map.set(n, k+ arr[n])
        return map.get(n);
    }

    return Math.max(climbDown(0), climbDown(1));
};