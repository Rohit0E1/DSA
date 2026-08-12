/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
let arr = [];
for(let i = 0; i < nums.length; i++){
    arr.push(nums[i]);
    hipifyUp(arr.length-1);
    if(arr.length > k) dequeue();
}
console.log(arr,nums)
return arr[0]


function hipifyUp (i){
    if (i == 0) return;
    let p = Math.floor((i-1)/2);

    if(arr[p] > arr[i]){
        let temp = arr[p];
        arr[p] = arr[i];
        arr[i] = temp;
        hipifyUp(p)
    }
}
function hipifyDown(i) {
    let l = 2 * i + 1;
    let r = 2 * i + 2;

    if (l >= arr.length) return;

    let smaller = l;

    if (r < arr.length && arr[r] < arr[l]) {
        smaller = r;
    }

    if (arr[smaller] < arr[i]) {
        [arr[i], arr[smaller]] = [arr[smaller], arr[i]];
        hipifyDown(smaller);
    }
}

function dequeue() {
    [arr[0],arr[arr.length-1]] = [arr[arr.length-1],arr[0]];
    let a = arr.pop();
    hipifyDown(0);
    return a;
}
};