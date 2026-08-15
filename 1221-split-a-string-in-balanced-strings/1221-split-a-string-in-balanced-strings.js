/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let map = new Map();
    let c = 0;
    for(let i = 0; i < s.length; i++){
        if(!map.has(s[i])) map.set(s[i],0)
        map.set(s[i], map.get(s[i])+1)
        if(map.get('R') == map.get('L')){
            c++;
            map.clear()
        }
    }
    return c;
};