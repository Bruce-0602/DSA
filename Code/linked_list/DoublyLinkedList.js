class MyNode {
    constructor(value){
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class MyDoublyLinkedList {
    constructor(value){
        this.head = new MyNode(value);
        this.tail = this.head;
        this.length = 1;
    }
    
    append(value){
        const newNode = new MyNode(value);
        this.tail.next = newNode;
        newNode.previous = this.tail;
        this.tail = newNode;
        this.length++;
        return this;
    }
    
    prepend(value){
        const newNode = new MyNode(value);
        newNode.next = this.head;
        this.head.previous = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }
    
    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return console.log(array);
    }
    
    insert(index, value){
        // check params
        if (index >= this.length) {
            return this.append(value);
        }
        // special case
        if (index === 0) {
          this.prepend(value);
          return this.printList();
        }
        
        const newNode = new MyNode(value);
        const leader = this.traverseToIndex(index-1);
        newNode.next = leader.next;
        leader.next.previous = newNode;
        leader.next = newNode;
        newNode.previous = leader
        this.length++;
        /* trial code;
        const newNode = new MyNode(value);
        let counter = 1;
        let currentNode = this.head;
        while (currentNode !== null) {
            if (index === counter){
                let nextNode = currentNode.next;
                currentNode.next = newNode;
                newNode.next = nextNode;
            }
            currentNode = currentNode.next;
            counter++;
        }*/
        return this.printList();
    }
    
    remove (index) {
        let leader = this.traverseToIndex(index-1);
        leader.next = leader.next.next;
        leader.next.next.previous = leader;
        return this.printList();
    }
    
    traverseToIndex (index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
}

let myLinkedList = new MyDoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
// console.log(myLinkedList);
myLinkedList.insert(2,99)
// myLinkedList.remove(2);