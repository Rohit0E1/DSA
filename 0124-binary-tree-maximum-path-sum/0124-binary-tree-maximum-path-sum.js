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
var maxPathSum = function(root) {
    if(!root) return;
    let max = root.val;

    const path =(root)=>{
        if (!root) return 0;

        let l = path(root.left);
        let r = path(root.right);

        let sum = l+r+root.val;
        console.log(sum)

        let res = Math.max(root.val,Math.max((l+root.val), (r+root.val)))

        max = Math.max(sum,Math.max(res,max));

        return res;
    }
    path(root);
    return max;
};