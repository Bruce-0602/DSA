// for Singly LL
reverse() {
        // pointer manipulation
        // https://www.youtube.com/watch?v=O0By4Zq0OFc
        if(!this.head.next){
            console.log("head.next = null")
            return this.head;
        }
        let prevNode = null;
        let currNode = this.head;
        let nextNode = null;
        
        while (currNode != null) {
            nextNode = currNode.next; // point nextNode to curr.next
            currNode.next = prevNode; // link curr.next to previous node
            prevNode = currNode;      // point prevNode to curr
            currNode = nextNode;      // point currNode to nextNode
        }
        
        this.head = prevNode;         // the previous last element now becomes the head
        return this.printList();
    }