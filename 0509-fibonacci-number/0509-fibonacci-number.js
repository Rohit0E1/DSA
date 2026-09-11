/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    let map = new Map();
    const fib1 = function (n) {
        if (n < 2) return n;
        if(map.has(n)) return map.get(n)
        let man = fib1(n - 1) + fib1(n - 2)
        if(!map.has(n)) map.set(n,man)

        return map.get(n);
    };

   return fib1(n)
}