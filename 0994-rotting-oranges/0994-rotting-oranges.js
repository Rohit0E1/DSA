/**
 * @param {number[][]} arr
 * @return {number}
 */
var orangesRotting = function(arr) {
    let queue = [];

    let qc = 0;
    for(let i =0; i< arr.length; i++){
        for(j=0;j<arr[0].length;j++){
        if(arr[i][j]==2){
            queue.push([i,j]) 
            qc++;
        }
    }}

    let step = 0;
    let qcc = 0;

    while(queue.length != 0){
        let top = queue[0];

        if(qc==0){
            qc = qcc;
            qcc = 0;
            step++;
        }

        if(arr[top[0]][top[1]+1] == 1){
            arr[top[0]][top[1]+1] =2
            queue.push([top[0],top[1]+1])
            qcc++;
        }        
        if(arr[top[0]][top[1]-1]== 1){
            arr[top[0]][top[1]-1] =2
            queue.push([top[0],top[1]-1])
            qcc++;
        }
        if(arr[top[0]-1] && arr[top[0]-1][top[1]] == 1){
            arr[top[0]-1][top[1]] = 2
            queue.push([top[0]-1,top[1]])
            qcc++;
        }
        if(arr[top[0]+1] && arr[top[0]+1][top[1]] == 1){
            arr[top[0]+1][top[1]] =2
            queue.push([top[0]+1,top[1]])
            qcc++;
        }
        qc --;
        queue.shift();
    }


    for(let i =0; i< arr.length; i++){
        for(j=0;j<arr[0].length;j++){
        if(arr[i][j] == 1|| arr[i][j]==1 || arr[i][j]==1 ){return -1}
    }}
    return step;
};