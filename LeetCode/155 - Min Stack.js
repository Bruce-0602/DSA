// use 2 stacks
// the min stack only pushes values smaller than the previous smallest one;
// when pop, if popping the min, also pop from the minStack
var MinStack = function() {
    this.minstack = [];
    this.stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if (this.minstack.length === 0 || val <= this.minstack[this.minstack.length - 1]) {
        this.minstack.push(val);
    } 
    this.stack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let val = this.stack.pop();
    if (val == this.minstack[this.minstack.length - 1]) {
        this.minstack.pop();
    } 
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minstack[this.minstack.length - 1];
};