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

    const find =(curr)=>{
        if (!curr) return curr;

        if (curr.val == val) return curr;

        if(curr.val > val) return find(curr.left);
        if(curr.val < val) return find(curr.right);
    }

    return find(root);
};