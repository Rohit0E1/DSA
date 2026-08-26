/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var shortestBeautifulSubstring = function(s, k) {
    let left = 0;
    let ones = 0;
    let ans = "";

    for (let right = 0; right < s.length; right++) {

        // Add current character
        if (s[right] === '1') {
            ones++;
        }

        // Too many 1s -> move left
        while (ones > k) {
            if (s[left] === '1') {
                ones--;
            }
            left++;
        }

        // Remove unnecessary zeros from the left
        while (ones === k && s[left] === '0') {
            left++;
        }

        // We have exactly k ones
        if (ones === k) {
            let current = s.slice(left, right + 1);

            if (
                ans === "" ||
                current.length < ans.length ||
                (current.length === ans.length && current < ans)
            ) {
                ans = current;
            }
        }
    }

    return ans;
};