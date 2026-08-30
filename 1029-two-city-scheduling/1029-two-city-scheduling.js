/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    let max = 0;
    let half = costs.length / 2;
    let pq = new MaxPriorityQueue(x => x.cost);

    for(let i = 0;  i < costs.length; i++){
        pq.push({ cost: (costs[i][1] - costs[i][0]), index: i});
    };
    let a = 0;
    for(let j = 0; j < costs.length; j++){
        let i = pq.pop().index;

        if(a >= half){
            max = max + costs[i][1];
        }else{
            max = max + costs[i][0];
            a++;
        }
    }

    return max
};