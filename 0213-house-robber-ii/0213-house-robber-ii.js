/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (arr) {
    if(arr.length == 1 ) return arr[0]
    let k = arr.length;
    let map = new Map();

    function climbDown(n, l) {
        if (n > l) return 0;
        if (n == l) return arr[n];
        if(map.has(n)) return map.get(n);

        let m = climbDown(n + 2, l);
        let r = climbDown(n + 3, l);

        console.log(l, r , m)
        let k = Math.max(m, r);

        map.set(n, k+ arr[n])
        return map.get(n);
    }

    
    let l1 = climbDown(0, k-2);
    map.clear();
    let l2 = climbDown(1, k-1);
    let l3 = climbDown(2, k-1);

    console.log(l1,l2,l3)
    return Math.max(Math.max(l1, l2), l3);
};