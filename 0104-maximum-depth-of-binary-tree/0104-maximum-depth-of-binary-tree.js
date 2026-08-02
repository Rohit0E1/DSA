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
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root) return 0;
    const levelV = (root, level)=> {
        if (!root) return;

        level++;

        let l = root.left && levelV(root.left, level);
        let r = root.right && levelV(root.right, level);

        return Math.max(r,Math.max(level,l));
    }

    let res  = levelV(root,0);
    return res;
};