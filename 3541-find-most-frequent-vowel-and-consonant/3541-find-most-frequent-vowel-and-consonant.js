/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let map = new Map();
    let mapv = new Map().set('a').set('e').set('i').set('o').set('u');
    for(let i = 0; i<s.length; i++){
        if(!map.has(s[i]))map.set(s[i],0);
        let m = map.get(s[i]) + 1;
        map.set(s[i], m);
    }
    let v =0;
    let c =0;
    for(const [k,val] of map){
        if(mapv.has(k)){ v = v > val ? v : val}
        else{c = c > val ? c : val}
    }
    return v+c; 
};