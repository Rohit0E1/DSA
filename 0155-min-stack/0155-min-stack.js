
var MinStack = function() {
    this.stack=[]
};

/** 
 * @param {number} value
 * @return {void}
 */
MinStack.prototype.push = function(value) {
    if(this.stack.length ==0){
        this.stack.push([value, value])
    }else{

    let top = this.stack[this.stack.length-1];

    // console.log(top, "__________________________________")
    if (value > top[1]){
        this.stack.push([value, top[1]]);
    }else{
        this.stack.push([value, value])
    }
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.stack.length ==0) return null;
    this.stack.pop();
    return null
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if(this.stack.length ==0) return null;

    return this.stack[this.stack.length-1][0]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if(this.stack.length ==0) return null;

    return this.stack[this.stack.length-1][1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(value)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */