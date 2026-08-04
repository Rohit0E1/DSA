/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function(root) {
    if(!root) return root;
    const con = (left,right)=>{
        if(!left || !right || !left.left || !right.right ) return ;
    

    left.left.next = left.right;
    left.right.next = right.left;
    right.left.next = right.right;

    con(left.left,left.right) 
    con(left.right,right.left)
    con(right.left, right.right) 
  }

    if(root.left) {
        root.left.next = root.right;
    }

    con(root.left,root.right);

    return root;
    
};