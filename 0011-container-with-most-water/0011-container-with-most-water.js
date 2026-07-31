/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
   let i = 0;
    let j = height.length - 1;
    let best = 0;

    while (i < j) {
        best = Math.max(best, Math.min(height[i], height[j]) * (j - i));
        if (height[i] < height[j]) i++;
        else j--;
    }

    return best;
};