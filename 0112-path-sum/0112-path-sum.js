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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  let hasSum = false;
  const isSum = (root,sum)=>{
        if (!root) return;

        sum = sum + root.val;

        let left = isSum(root.left, sum);
        let right = isSum(root.right, sum);

        if(!left && !right){
            if(sum == targetSum) {hasSum = true};
        }
        return 1;
  } 

  isSum(root,0);
  return hasSum;
};  