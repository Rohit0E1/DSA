/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (int) {
    int.sort((a, b) => a[1] - b[1]);
    console.log(int)
    let res = 0;

    for (let i = 1; i < int.length; i++) {
        if(int[i-1][1] > int[i][0]) {
            res++ 
            int[i][1] = Math.min(int[i-1][1],int[i][1]);
        };
    }

    return res;
};