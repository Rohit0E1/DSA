/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(arr, target) {
    let a =1;
    let map = {};
    for(let i =0; i< arr.length; i++){
        console.log(map[arr[i]],arr[i])

        let check = map[arr[i]] == 0 ? 1 : null
        if(map[arr[i]] || check){
            return [map[arr[i]]+1, i+1]
        }else{
            let get = target-arr[i]
            map[get] = i;
        }
    }
};