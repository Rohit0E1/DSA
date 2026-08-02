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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let arr = [];
    const traVerse = (root,level) =>{
        if (!root) return;
        if(!arr[level]) arr[level] = [];

        arr[level].push(root.val);

        level++;
        root.left && traVerse(root.left, level);
        root.right && traVerse(root.right, level);
    }

    traVerse(root,0);
    return arr;
    };