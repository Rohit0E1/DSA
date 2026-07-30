/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(h, n){
    if (h.length == 1 && n.length==1 && n[0]==h[0]) return 0;
    if(h.length < n.length) return -1;
    let length = n.length;
    let c = 0;
    let j = 0;
    let i = 0;
    while(i <= h.length){
        if(h[i] == n[0]){
            if(h[c] == n[j]){
                j++;
                c++;
            }else{
                i++;
                c=i;
                j=0;
            }
        if(j==length) return i;
        }else{
            j=0;
            i++;
            c=i;
        }
        if(j==length) return i;
    }
    if(j==length)return i;
    return -1;
};