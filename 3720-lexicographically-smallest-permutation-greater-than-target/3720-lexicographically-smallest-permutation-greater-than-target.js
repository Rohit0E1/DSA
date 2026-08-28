/**
 * @param {string} s
 * @param {string} target
 * @return {string}
 */
var lexGreaterPermutation = function (s, target) {
    let count = new Array(26).fill(0);

    // Frequency of characters in s
    for (let ch of s) {
        count[ch.charCodeAt(0) - 97]++;
    }

    let ans = [];

    for (let i = 0; i < target.length; i++) {
        let x = target.charCodeAt(i) - 97;

        // Same character available
        if (count[x] > 0) {
            ans.push(target[i]);
            count[x]--;
            continue;
        }

        // Try a bigger character at current position
        for (let c = x + 1; c < 26; c++) {
            if (count[c] > 0) {
                ans.push(String.fromCharCode(c + 97));
                count[c]--;

                // Fill remaining positions with smallest chars
                for (let k = 0; k < 26; k++) {
                    while (count[k] > 0) {
                        ans.push(String.fromCharCode(k + 97));
                        count[k]--;
                    }
                }

                return ans.join("");
            }
        }

        // No bigger character -> need to backtrack
        while (ans.length > 0) {
            let last = ans.pop();
            let lastCode = last.charCodeAt(0) - 97;

            count[lastCode]++;

            // Try making this position bigger
            for (let c = lastCode + 1; c < 26; c++) {
                if (count[c] > 0) {
                    ans.push(String.fromCharCode(c + 97));
                    count[c]--;

                    for (let k = 0; k < 26; k++) {
                        while (count[k] > 0) {
                            ans.push(String.fromCharCode(k + 97));
                            count[k]--;
                        }
                    }

                    return ans.join("");
                }
            }
        }

        return "";
    }

    // We matched target completely.
    // But answer must be STRICTLY greater,
    // so backtrack once.

    while (ans.length > 0) {
        let last = ans.pop();
        let lastCode = last.charCodeAt(0) - 97;

        count[lastCode]++;

        for (let c = lastCode + 1; c < 26; c++) {
            if (count[c] > 0) {
                ans.push(String.fromCharCode(c + 97));
                count[c]--;

                for (let k = 0; k < 26; k++) {
                    while (count[k] > 0) {
                        ans.push(String.fromCharCode(k + 97));
                        count[k]--;
                    }
                }

                return ans.join("");
            }
        }
    }

    return "";
};