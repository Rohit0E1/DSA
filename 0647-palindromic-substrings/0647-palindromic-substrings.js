/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    const checkPal = (str) =>{
        if(str.length < 2) return false;
        let l = 0;
        let r = str.length-1;

        while (l <= r){
            if(str[l] != str[r]){
                return false;
            }
            l++;
            r--;
        };
        return true;
    };

    let count = s.length;
    for(let i = 0; i <= s.length; i++){
        for(let j = i+1; j <= s.length; j++){
            let res = checkPal(s.slice(i,j));
            if(res == true){
                count++;
            }
        }
    }

    return count;
};