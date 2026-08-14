/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let map = new Map();
    let c =0;

    for(let i = 0; i<jewels.length; i++){
        let a = jewels[i].charCodeAt();
        map.set(a);
    }

    for(let j = 0; j< stones.length; j++){
        let a = stones[j].charCodeAt();
        if(map.has(a)) c++;
    };

    return c;
};