/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    if (!root) return [];
    let arr = [];    
const tra=(root)=>{
    if (!root) return ;
    
    arr.push(root.val);

    tra(root.left);
    tra(root.right);
}
    tra(root, arr);
    return arr;
};