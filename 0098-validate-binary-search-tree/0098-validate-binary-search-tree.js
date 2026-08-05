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
var isValidBST = function(root) {
    function isValid (curr, min, max) {
        if(!curr) return true;

        if(curr.val <= min || curr.val >= max) return false;

        return isValid(curr.left, min , curr.val) && isValid(curr.right, curr.val, max)
    }

    return isValid(root, -Infinity, Infinity);
};