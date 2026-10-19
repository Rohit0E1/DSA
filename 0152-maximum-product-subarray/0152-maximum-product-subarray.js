/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(arr) {
    let max = arr[0];

    for(let i = 0; i < arr.length; i++){
        let temp = arr[i];
            if(temp > max){
                max = temp;
            }
        for(let j = i+1; j < arr.length; j++){
            temp = temp * arr[j];
            if(temp > max){
                max = temp;
            }
        }
    }

    return max;
};