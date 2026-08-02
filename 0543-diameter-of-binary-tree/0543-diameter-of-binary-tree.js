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
var diameterOfBinaryTree = function(root) {
     let dia = 0;

     const findDia = (root)=>{
        if (!root) return 0;

        let l = findDia(root.left);
        let r = findDia(root.right);

        let sum = l+r;
        if(sum>dia) dia = sum;

        return Math.max(l,r)+1;
     }
    findDia(root)
     return dia;
};