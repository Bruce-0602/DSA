class MyQueue {
    // using 2 stacks(arrays) to form a Queue
    constructor(){
        this.first = [];
        this.last = [];
        this.length = 0;
    }

    peek() {
        return this.last[this.last.length - 1];
    }
    
    enqueue(value) {
        this.first.push(value);
        this.last.push(this.first.pop());
        this.first.push(value);
        this.length++;
        return this;
    }
    
    dequeue() {
        this.last.pop();
        this.first.pop();
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