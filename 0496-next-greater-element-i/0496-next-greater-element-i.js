/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let stack = [];
    stack.push(stack[stack.length-1])
    let map = new Map()

    for(let i = nums2.length-1; i >= 0; i--){
        let top = stack[stack.length-1]
        if(nums2[i] < top){
            stack.push(nums2[i]);
            map.set(nums2[i],top);
        }else{
            let comp ;
            while(stack.length != 0){
                comp = stack[stack.length-1]
                if(comp < nums2[i]){
                    stack.pop();
                    continue;
                }else{
                    map.set(nums2[i],comp);
                    break;
                }
            }
            stack.push(nums2[i])
        }
    }
    console.log(map)

    let rarr = []
    for(let j =0; j<nums1.length; j++){
        if(map.get(nums1[j])){
            rarr.push(map.get(nums1[j]))
        }else{
            rarr.push(-1)
        }
    }

    return rarr;
};