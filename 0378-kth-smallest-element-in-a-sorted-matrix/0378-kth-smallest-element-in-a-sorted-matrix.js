/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    let pq = new MinPriorityQueue(x => x.val);
    let n = matrix[0].length;

    for(let i = 0; i< Math.min(n,k); i++){
       pq.push({val: matrix[i][0], row: i, col:0});
    }

    console.log(pq.toArray())
    
    for(let count=0; count < k-1; count++){
        let {val, row, col} = pq.pop();

        if(col+1 < n){
            pq.push({val: matrix[row][col+1], row:row, col: col+1})
        }
    };
    return pq.pop().val;
};