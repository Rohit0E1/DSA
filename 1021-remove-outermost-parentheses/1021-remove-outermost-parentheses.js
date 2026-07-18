/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let stack = [];
    let rs = "";

    for(let i = 0; i< s.length; i ++){
        if(s[i] == "("){
            stack.push(s[i]);
            if(stack.length > 1){
                rs = rs + s[i];
            }
        }else{
            stack.pop();
            if(stack.length > 0){
                rs = rs + s[i];
            }
        }
    }
    return rs
};