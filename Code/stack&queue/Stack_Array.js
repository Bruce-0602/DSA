class MyStack {
    constructor(){
        this.valueArray = [];
        this.top = this.valueArray[this.valueArray.length - 1];
        this.bottom = this.valueArray[0];
        this.length = this.valueArray.length;
    }
    
    peek() {
        return this.top;
    }
    
    push(value) {
        this.valueArray.push(value);
        return this;
    }
    
    pop() {
        this.valueArray.pop();
        return this;
    }
    
    isEmpty() {
        return (this.valueArray.length == 0 ? true : false);
    }
    
    getLength (){
        return this.valueArray.length;
    }
}

const myStack = new MyStack();
console.log(myStack.isEmpty());
console.log(myStack.push("Google"));
console.log(myStack.push("Udemy"));
console.log(myStack.push("Discord"));
console.log(myStack.isEmpty());
console.log(myStack.getLength());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.isEmpty());