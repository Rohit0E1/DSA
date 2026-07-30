/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let a = 0;
    let b = 0;

    while(b < t.length){
        if(s[a] != t[b]) {
            b++;
        }else if(s[a]==t[b]){
            a++;
            b++;
        }
    }console.log(a,s.length-1)
    if(a !=s.length) return false;
    return true;
};