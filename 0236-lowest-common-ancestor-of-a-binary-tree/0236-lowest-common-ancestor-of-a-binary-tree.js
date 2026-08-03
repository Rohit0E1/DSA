/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let resNode ;

    const isLca = (root) =>{
        if(!root)return ;


        let l = isLca(root.left);
        let r = isLca(root.right);

        if(l && r || (root == p || root == q) && r || (root == p || root == q) && l) {
            resNode = root;
            return;
        }
        if(root == p || root == q) return true;
        if(l || r ) return true;
        return false;
};

    isLca(root);
    return resNode;
}