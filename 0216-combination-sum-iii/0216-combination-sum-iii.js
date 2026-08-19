/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let res = [];
    let gt = n > 9 ? 9 : n;
    const back =(node, st, sum) =>{
    if(node.length == k && sum == n) res.push([...node]);
    for(let i = st; i <= gt; i++){
        if(sum + i > n) continue;
        node.push(i);
        back(node, i+1, sum+i);
        node.pop()
    }
    }

    back([],1,0)
    return res;
};