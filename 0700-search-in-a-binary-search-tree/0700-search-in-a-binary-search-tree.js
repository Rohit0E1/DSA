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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    let ans = null;
    let traversal = (curr) => {
        if (curr.val == val) {
            ans = curr;
        } else {
            if (curr.val < val) {
                curr.right && traversal(curr.right);
            } else {
                curr.left && traversal(curr.left);
            }
        }
    }
    traversal(root);
    return ans;
};