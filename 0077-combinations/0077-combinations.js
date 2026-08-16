/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let res = [];

    const back = (node, st)=>{
        if(node.length > k) return;

        if(node.length == k ) res.push([...node])

        for(let i = st; i<=n; i++){
            node.push(i);
            back(node, i+1);
            node.pop()
        }
    }

    back([],1)
    return res;
};