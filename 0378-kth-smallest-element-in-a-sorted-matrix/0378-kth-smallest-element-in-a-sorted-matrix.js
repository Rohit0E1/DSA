/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    let a = matrix.flat();
    let pq = new MaxPriorityQueue();

    for(let i = 0; i<a.length; i++){
        pq.push(a[i]);
        if(pq.size()>k)pq.pop();
    }

    return pq.front()
};