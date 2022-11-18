class MyNode {
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class MyQueue {
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    
    peek() {
        return this.first;
    }
    
    enqueue(value) {
        const newNode = new MyNode(value);
        if (this.isEmpty()) {
            this.first = newNode;
            this.last = newNode;
        } else {
            const tempPointer = this.top;
            this.first = newNode;
            this.first.next = tempPointer;
        }
        this.length++;
        return this;
    }
    
    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        if (this.length == 1){
            this.last = null;
        }
        this.first = this.first.next;
        this.length --;
        return this;
    }
    
    isEmpty() {
        return (this.length == 0 ? true : false);
    }
}

const myQueue = new MyQueue();
console.log(myQueue.isEmpty());
console.log(myQueue.enqueue("Google"));
console.log(myQueue.enqueue("Udemy"));
console.log(myQueue.enqueue("Discord"));
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.isEmpty());