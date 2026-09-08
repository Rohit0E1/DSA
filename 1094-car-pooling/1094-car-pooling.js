/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
    let arr = new Array(1000).fill(0);

    for(let i = 0; i < trips.length; i++){
        let [p, f, t] = trips[i];
        arr[f] = arr[f] + p;
        arr[t] = arr[t] - p;
    }
    
    let c = 0
    for(let j = 0; j < 1001; j++){

        c = c + arr[j];
        if(c > capacity){
            return false;
        }
    }

    return true;
};