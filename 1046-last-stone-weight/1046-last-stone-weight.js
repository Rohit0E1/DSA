/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    if(stones.length <= 1) return stones[0] ? stones[0] : 0;
    let heap = new MaxPriorityQueue();

    for(let i = 0; i< stones.length; i++){
        heap.enqueue(stones[i]);
    }


    for(let i = 0; i < stones.length; i++){
        if(heap.size() <= 1) break;

        let b1 = heap.dequeue();
        let b2 = heap.dequeue();

        if(b1 != b2) {let n = b1 - b2;
        heap.enqueue(n);
        }
    }

    return heap.front() ? heap.front() : 0
};