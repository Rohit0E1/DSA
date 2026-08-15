/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let map = new Map();
    for(let i = 0; i < s.length; i++){
        if(!map.has(s[i]))map.set(s[i],0);
        map.set(s[i], map.get(s[i])+1)
    };

    console.log(map)

    for(let j = 0; j < t.length; j++){
        if(!map.has(t[j])) return false;
        else{
            map.set(t[j], map.get(t[j])-1)
        }  
    };

    for(const [k,v] of map){
        console.log(v)
        if(v != 0) return false;
    };

    return true;
};