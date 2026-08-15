/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    s = s.split("");
    let i =0;
    let lim = k*2;

    let l = k;
    console.log(s)
    while(s[i]){
        if(i  >= k){
            i = lim;
            k = i + l;
            lim = lim + l*2;
        }
        let temp = s[k-1];
        s[k-1] = s[i];
        s[i] = temp;
        console.log(s, i , k-1)

        i++;
        k--;
    }
    return s.join("");
};