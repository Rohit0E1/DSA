/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(arr) {
    let l = 0, r = arr.length - 1, lmax = 0, rmax = 0, sum = 0;
    while (l < r) {
        if (arr[l] < arr[r]) {
            lmax = Math.max(lmax, arr[l]);
            sum += lmax - arr[l];
            l++;
        } else {
            rmax = Math.max(rmax, arr[r]);
            sum += rmax - arr[r];
            r--;
        }
    }
    return sum;
};
