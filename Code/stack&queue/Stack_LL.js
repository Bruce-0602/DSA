class MyNode {
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class MyStack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    
    peek() {
        return this.top;
    }
    
    push(value) {
        const newNode = new MyNode(value);
        if (this.isEmpty()) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const tempPointer = this.top;
            this.top = newNode;
            this.top.next = tempPointer;
        }
        this.length++;
        return this;
    }
    
    pop() {
        if (this.isEmpty()) {
            return null;
        }
        if (this.length == 1){
            this.bottom = null;
        }
        this.top = this.top.next;
        this.length --;
        return this;
    }
    
    isEmpty() {
        return (this.length == 0 ? true : false);
    }
}

const myStack = new MyStack();
console.log(myStack.isEmpty());
console.log(myStack.push("Google"));
console.log(myStack.push("Udemy"));
console.log(myStack.push("Discord"));
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.isEmpty());