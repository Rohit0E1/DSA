/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (arr) {
    let res = new Array(arr.length).fill(1);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i - 1] < arr[i]) {
            res[i] = res[i] + res[i - 1];
        } else if (arr[i + 1] < arr[i]) {
            res[i] = res[i] + 1;
        } else if (arr[i - 1] < arr[i] && arr[i + 1] < arr[i]) {
            res[i] = res[i] + res[i - 1];
        }
    }
    console.log(res)
    let m = arr.length-1;
    while (m >=0) {
        if(arr[m] < arr[m - 1]){
        res[m - 1] = Math.max(res[m] + 1, res[m-1])
        }
        m--;
    }
    console.log(res)
    let sum = 0;
    for (let j = 0; j < res.length; j++) {
        sum = sum + res[j];
    }

    return sum;
};