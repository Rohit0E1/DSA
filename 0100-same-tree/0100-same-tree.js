/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    const isValid = (p,q) =>{
        if(!p && !q) return true;
        if(!p || !q) return false;

        let l = isValid(p.left,q.left) 
        let r = isValid(p.right, q.right);

        if(l == false || r == false) return false;

        if(p.val == q.val) {return true}
        else{return false} 
    };

    return isValid(p,q);
};