/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let i =0;
    let j =0;
    let map = new Map();
    map.set(s[0],1);
    let max = 0;
    let tempMax = 0;
    while(j<s.length){
        let valid = isValid(map,k);
        if(valid){
            max = Math.max(max, j-i+1)
            j++;
            if(map.has(s[j])) {map.set(s[j], map.get(s[j])+1)}
            else{map.set(s[j], 1)}
        }else{
            map.set(s[i], map.get(s[i])-1)
            i++;
        }
    }
    return max;
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