/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let map = new Map();
    map.set(x);
    let resMap = new Map();

    for(let i = 0; i<words.length; i++){
        for(let j = 0; j < words[i].length; j++){
            if(map.has(words[i][j])) resMap.set(i);
        }
    };
    return [...resMap.keys()]
};