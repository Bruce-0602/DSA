/*
 To be used inside BST.js
*/
 breadthFirstSearch() {
        let currentNode = this.root;
        let list = [];
        let queue = [];
        queue.push(currentNode);
        
        while(queue.length > 0 ){
            currentNode = queue.shift();
            console.log(currentNode.value);
            list.push(currentNode.value);
            
            // enqueue the child nodes if exists
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        return list;
    }
    
    breadthFirstSearchR(queue, list) {
        if (!queue.length) {
            return list;
        }
        
        let currentNode = queue.shift();
        list.push(currentNode.value);
        
        // enqueue the child nodes if exists
        if (currentNode.left) {
            queue.push(currentNode.left);
        }
        if (currentNode.right) {
            queue.push(currentNode.right);
        }
        return this.breadthFirstSearchR(queue, list);
    }