/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let res = [];
    let map = new Map();
    nums.sort();
    
    const back = (node)=>{
        console.log(node)
        if(node.size == nums.length){
            {res.push([...node.values()]);}
        return;
        };

        for(let i = 0; i<nums.length; i++){
            if (node.has(i)) continue;

            if (i > 0 && nums[i] === nums[i - 1] && !node.has(i - 1)) {
                continue;
            }

            node.set(i,nums[i]);
            back(node);
            node.delete(i);
        }
    }

    back(map);
    return res;
};