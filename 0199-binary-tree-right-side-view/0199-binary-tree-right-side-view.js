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
var rightSideView = function(root) {
    let map = new Map();

    let view =(root,level)=>{
        if(!root) return;

        if(!map.has(level)) map.set(level,root.val);

        level++;
        view(root.right,level);
        view(root.left,level);
    }

    view(root,0);
    return [...map.values()]
};