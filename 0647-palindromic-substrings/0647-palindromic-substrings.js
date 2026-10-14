/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let n = s.length; 
    let arr = Array.from({length: n},() => Array(n).fill(null));

    let ans = 0;

    for(let i = 0; i< n; i++){
        arr[i][i] = true;
        ans++;

        if(i < n-1 && s[i] == s[i+1]){
            arr[i][i+1] = true;
            ans++;
        }
    };

    for(let len = 3; len <= s.length; len++){
        for(let j = 0 ; j<= n-len ; j++){
            let i = j + len-1;

            if(s[i] == s[j] && arr[j+1][i-1]){
                ++ans;
                arr[j][i] = true;
            }
        }
    }

    return ans;
};