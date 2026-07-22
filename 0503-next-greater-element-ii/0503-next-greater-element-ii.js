/**
 * @param {number[]} nums1
 * @return {number[]}
 */
var nextGreaterElements = function(nums1) {
    let g = -Infinity;
    let gi = 0;
    let arr =[]
    for(let l=0; l<nums1.length; l++){
        g = Math.max(nums1[l],g)
        if(g == nums1[l]) gi = l;
        arr.push(-1);
    };
    let nums = nums1
    let l = nums.length-1;
    for(l; l>gi; l--){
        let a = nums.pop();
        nums.unshift(a);
    };
    console.log(nums)

    let stack = [];

    for(let i = nums.length-1; i >= 0; i--){
        let top = stack[stack.length-1]
        if(nums[i] < top){
            stack.push(nums[i]);
            arr[i] = top;
        }else{
            let comp ;
            while(stack.length != 0){
                comp = stack[stack.length-1]
                if(comp <= nums[i]){
                    stack.pop();
                    continue;
                }else{
                    arr[i] = comp;
                    break;
                }
            }
            stack.push(nums[i])
        }
    }

    let k = nums1.length-l-1;
    console.log(k,l)

    for(let i=0; i<k; i++){
        let m = arr.shift();
        arr.push(m);
    }

    return arr;
};