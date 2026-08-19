/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let res = [];
    candidates.sort();

    const backtrack = (node, sum, st) => {
        if(sum == target) {
        res.push([...node]) 
        return;
        }
        if(sum > target) return;

        for(let i = st; i < candidates.length; i++){
            if(i > st && candidates[i-1] == candidates[i]) continue;
            let k = sum + candidates[i]
            node.push(candidates[i]);
            backtrack(node, k, i+1);
            node.pop();
        }
    };
    backtrack([],0,0);
    return res;
};