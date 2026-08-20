/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    let res = [];

    const backtrack = (path, rs) => {

        if (!rs.length) {
            res.push([...path]);
            return;
        }

        for (let i = 1; i <= rs.length; i++) {

            let choice = rs.substring(0, i);
            if (!isPalinDrome(choice)) continue;

            path.push(choice);
            backtrack(path, rs.substring(i));
            path.pop()
        }
    }

    backtrack([], s);
    return res;
};

const isPalinDrome = (s) => {
    let i = 0;
    let j = s.length - 1;

    while (i < j) {
        if (s[i++] != s[j--]) return false;
    }
    return true;
}