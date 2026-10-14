/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let n = s.length;
    let arr = Array.from({ length: n }, () => Array(n).fill(null));

    let max = 0;
    let low = 0;
    let high = 0;

    for (let i = 0; i < n; i++) {
        arr[i][i] = true;

        if (i < n - 1 && s[i] == s[i + 1]) {
            arr[i][i + 1] = true;

            if (i+1 - i > max) {
                max = i+1 - i 
                low = i;
                high = i+1;
            };
        }
    };

    for (let len = 3; len <= s.length; len++) {
        for (let j = 0; j <= n - len; j++) {
            let i = j + len - 1;

            if (s[i] == s[j] && arr[j + 1][i - 1]) {
                arr[j][i] = true;

                if (i - j > max) {
                    max = i - j
                    low = j;
                    high = i;
                };
            }
        }
    }
    return s.slice(low, high + 1)
};