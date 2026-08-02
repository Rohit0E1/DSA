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
 * @return {boolean}
 */
var isBalanced = function(root) {
    let isBalance = true;
    const balance =(root, level)=>{
        if(!root) return level;

        level++;
        let l = balance(root.left, level);
        let r = balance(root.right, level);

            let diff = l > r ? l-r : r-l;

            if(diff > 1) isBalance = false;

        return Math.max(l,r)
    }

    balance(root, 0);
    return isBalance;
};