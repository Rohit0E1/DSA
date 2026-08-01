/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let i = 0, map = new Map(), max = 0, best = 0;
    for (let j = 0; j < s.length; j++) {
        map.set(s[j], (map.get(s[j]) || 0) + 1);
        max = Math.max(max, map.get(s[j]));
        while (j - i + 1 - max > k) {
            map.set(s[i], map.get(s[i]) - 1);
            i++;
            max = Math.max(...map.values());
        }
        best = Math.max(best, j - i + 1);
    }
    return best;
};


const isValid = (map, k)=>{
    let arr = [...map.values()]
    let max = 0;
    let sum = 0;
    for(let i =0 ; i< arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
        sum = arr[i]+sum;
    }
    if((sum-max) <= k) return true;
    return false;
}