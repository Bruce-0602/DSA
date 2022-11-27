/*
use call stack and draw tree to understand
To be used inside BST.js
*/

// inside class
    DFSInorder () {
        return traverseInOrder(this.root, []);
    }
    
    DFSPostorder () {
        return traversePostOrder(this.root, []);
    }
    
    DFSPreorder () {
        return traversePreOrder(this.root, []);
    }

// functions:
function traverseInOrder(node, list){
    if (node.left) {
        traverseInOrder(node.left, list);
    }
    // push here for in-order
    list.push(node.value);
    
    if (node.right) {
        traverseInOrder(node.right, list);
    }
    return list;
}

//Inorder Iterative
function traverseInOrderI(node){
    var stack = [];
    var list = [];
    if (root == null) return list;
    // when node == null and stack.length > 0 (at the bottom of the tree) -> skip inner while to pop stack
    // stopping condition is stack empty and prevNode.right = null
    while (stack.length > 0 || node !== null){
    	// when current node is not null, push to the stack and go for the left most child
        while (node != null){
            stack.push(node);
            node = node.left;
        }
        // when reached bottom of the left, get the last item in the stack
        // push the value to the list
        // go for the right child
        node = stack.pop();
        list.push(node.value);
        node = node.right;
    }
    return list;
}

function traversePostOrder(node, list){
    
    
    if (node.left) {
        traversePostOrder(node.left, list);
    }
    
    if (node.right) {
        traversePostOrder(node.right, list);
    }
    
    // push here for post-order
    list.push(node.value);
    
    
    return list;
}

function traversePreOrder(node, list){
    // push here for pre-order
    list.push(node.value);
    
    if (node.left) {
        traversePreOrder(node.left, list);
    }
    
    if (node.right) {
        traversePreOrder(node.right, list);
    }
    
    
    return list;
}
