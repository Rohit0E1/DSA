/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res = [];

    const backtrack = (node, sum, st) => {
        if(sum == target) {
        res.push([...node]) 
        return;
        }
        if(sum > target) return;

        for(let i = st; i < candidates.length; i++){
            let k = sum + candidates[i]
            node.push(candidates[i]);
            backtrack(node, k, i);
            node.pop();
        }
    };
    backtrack([],0,0);
    return res;
};