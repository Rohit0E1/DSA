/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];

    for(let i =0; i<tokens.length; i++){
        console.log("_________________", stack)
        if(tokens[i] == "-"||tokens[i] == "+"||tokens[i] == "*"||tokens[i] == "/"){
            let right = stack.pop();
            let left = stack.pop();

            let sum = 0;

            if(tokens[i] == "+"){
                sum = Number(left) + Number(right);
            }else if(tokens[i] == "-"){
                sum = Number(left) - Number(right);
            }else if ( tokens[i]=="*"){
                sum = Number(left) * Number(right);
            }else if (tokens[i] == "/"){
                sum = Number(left) / Number(right);

                sum = sum > 0 ? Math.floor(sum): Math.ceil(sum);
            }

            stack.push(sum);
        }else{
            stack.push(Number(tokens[i]));
        }
    }

    return Number(stack.pop())
};