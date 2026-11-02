/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(arr) {
    let map = new Map();
    function mapping (st){
        if(arr[st] != 0 && !arr[st]) return 0;
        if(map.has(st)) return map.get(st);
        let max = 0;
        for(let i = st+1; i < arr.length; i++){
            if(arr[i] > arr[st]){
                max = Math.max(max, mapping(i))
            }
        }

        map.set(st, max+1);
        return max+1;
    }

    let max = 0;

    for(let i = 0; i < arr.length; i++){
        max = Math.max(mapping(i), max);
    }

    return max;
};