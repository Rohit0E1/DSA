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
var zigzagLevelOrder = function(root) {
    let arr = [];
    const traVerse = (root,level) =>{
        if (!root) return;
        if(!arr[level]) arr[level] = [];

        if(level % 2 == 0){
             arr[level].push(root.val);
        }else{
            arr[level].unshift(root.val);
        }
        
        level++;
        root.left && traVerse(root.left, level);
        root.right && traVerse(root.right, level);
    }

    traVerse(root,0);
    return arr;
    
};