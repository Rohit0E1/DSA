/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    let pq = new MaxPriorityQueue();
    for(let i = 0; i<matrix.length; i++){
        for(let j =0; j<matrix[i].length; j++)
        pq.push(matrix[i][j]);
    }
    while(pq.size() > k) {pq.pop()}
    return pq.front();
};