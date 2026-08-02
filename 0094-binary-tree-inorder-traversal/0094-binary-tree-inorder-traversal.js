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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
      if (!root) return [];
    let arr = [];    
    const tra=(root)=>{
        if (!root) return ;

        let left = tra(root.left);
        // left && arr.push(left);
        arr.push(root.val)
        let right = tra(root.right);
        // right && arr.push(right);

        return root.val;
    }
    tra(root, arr);
    return arr;
};