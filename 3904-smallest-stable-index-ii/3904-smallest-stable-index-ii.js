
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var firstStableIndex = function(nums, k) {
    let n = nums.length;

    // right[i] = minimum element from i to n - 1
    let right = new Array(n);

    right[n - 1] = nums[n - 1];

    for (let i = n - 2; i >= 0; i--) {
        right[i] = Math.min(nums[i], right[i + 1]);
    }

    // Maximum from 0 to i
    let leftMax = 0;

    for (let i = 0; i < n; i++) {
        leftMax = Math.max(leftMax, nums[i]);

        if (leftMax - right[i] <= k) {
            return i;
        }
    }

    return -1;
};

