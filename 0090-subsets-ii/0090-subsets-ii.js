/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let res = [];
    nums.sort();

    const back = (node, st) =>{
        res.push([...node])
        for(let i = st; i < nums.length; i++){
            if( i > st && nums[i-1] == nums[i]) continue;
            node.push(nums[i]);
            back(node, i+1);           
            node.pop()
        }
    }

    back([],0);
    return res
};