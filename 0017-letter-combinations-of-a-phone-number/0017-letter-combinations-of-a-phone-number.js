/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let map = new Map().set(2, ['a','b','c']).set(3,['d','e','f']).set(4,['g','h','i']).set(5,['j','k','l']).set(6,['m','n','o']).set(7,['p','q','r','s']).set(8,['t','u','v']).set(9,['w','x','y','z']);
    let res = [];

    let l = digits.length;

    const backtrack = (node, arr, n) => {
        if(node.length == l) {res.push([...node].join(''))
        return;}
        for(let i = 0; i< arr.length; i++){
            if(n <= l){
            node.push(arr[i])
            backtrack(node, map.get(Number(digits[n])) || [], n+1);
            node.pop()}
        }
    }
    // console.log(map.get(2))
    backtrack([], map.get(Number(digits[0])), 1);
    return res;

};