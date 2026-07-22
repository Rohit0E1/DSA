/**
 * @param {number[]} t
 * @return {number[]}
 */
var dailyTemperatures = function(t) {
    let stack = [];
    let r = [];
    stack.push([t[t.length-1],0]);
    r[t.length-1]=0;
    for(let i = t.length-2; i>= 0; i--){
        let top = stack[stack.length-1][0];
        if(top > t[i]){
            stack.push([t[i],1]);
            r[i]=1;
        }else{
            let c = 1;
            while (stack.length != 0){
                let k = stack[stack.length-1];
                if(k[0] <= t[i]){
                    c = c + (k[1] > 0 ? k[1] : 1);
                    stack.pop();
                    continue;
                }else{
                    stack.push([t[i],c])
                    r[i] = c;
                    break;
                }
            }
            if(stack.length==0){
                stack.push([t[i],0]);
                r[i] = 0;
            }
        }
    }
    return r;
    
};