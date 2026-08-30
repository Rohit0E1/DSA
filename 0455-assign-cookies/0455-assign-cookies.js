/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a, b) => b-a); 
    s.sort((a, b) => b-a);


    let st = 0;
    let j = 0;
    for(let i = 0; i < g.length; i++){
        if(g[i] <= s[j]){
            st++;
            s[j] = s[j] - g[i];
            if(s[j] == 0 || s[j] < g[i]){
                j++;
            }
        }
    }

    return st;
};