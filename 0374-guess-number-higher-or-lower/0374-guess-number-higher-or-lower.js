/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let left = 1;
    let right = n;
    while(left <= right){
        let middle = Math.ceil(left+((right-left)/2));

        let gus = guess(middle);

        if(gus==0){return middle;}
        else if(gus == -1) {right = middle-1;}
        else{left = middle+1;}
    }
};