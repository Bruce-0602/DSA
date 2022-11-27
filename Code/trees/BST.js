class MyNode {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class MyBinarySearchTree {
    constructor(){
    this.root = null;
    }
    
    insert(value){
        //create new node
        const newNode = new MyNode(value);
        
        if (this.root == null) {
            this.root = newNode;
            return this.root
        }
        
        let currentNode = this.root;
        while (true) {
            
            if (currentNode.value > value && currentNode.left == null){
                currentNode.left = newNode;
                break;
            } else if (currentNode.value < value && currentNode.right == null){
                currentNode.right = newNode;
                break;
            } else if (currentNode.value > value && currentNode.left){
                currentNode = currentNode.left;
                // continue;
            }  else if (currentNode.value < value && currentNode.right){
                currentNode = currentNode.right;
                // continue;
            }
        }
        return this.root;
    }
    
    lookup(value){
        if(!this.root){
            return false;
        }
        let currentNode = this.root;
        while (currentNode) {
            if (currentNode.value == value){
                return currentNode;
            } else if (currentNode.value > value){
                currentNode = currentNode.left;
            } else if (currentNode.value < value){
                currentNode = currentNode.right;
            } 
        }
        return false;
    }
    
    remove(value) {
    /* 1. find the node (tracking parent)
         1.1 currentNode no right child
          1.1.1 removing root
          1.1.2 not removing root

         1.2 currentNode's Right child doesnt have a left child
          1.2.1 removing root
          1.2.2 not removing root
        
         1.3 currentNode's Right child have a left child
          - find leftmost and it's parent
          - convert the currentNode's right subtree to the leftmostNode's right subtree
          1.3.1 removing root
          1.3.2 not removing root
    */
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while(currentNode){
      if(value < currentNode.value){
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if(value > currentNode.value){
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!
        
        //Option 1: No right child: 
        if (currentNode.right === null) {
          if (parentNode === null) {          // when removing root
            this.root = currentNode.left;
          } else {
            
            //if parent > current value, make current left child a child of parent
            if(currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;
            
            //if parent < current value, make left child a right child of parent
            } else if(currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }
        
        //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left; //move currentNode's left child to the rightChild's left 
          if(parentNode === null) {
            this.root = currentNode.right;
          } else {
            
            //if parent > current, make right child of the left the parent
            if(currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;
            
            //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }
        
        //Option 3: Right child that has a left child
        } else {

          //find the Right child's left most child and it's parent

          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while(leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }
          
          //CurrentNode's right subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if(parentNode === null) {
            this.root = leftmost;
          } else {
            if(currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if(currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
      return true;
      }
    }
  }
}

const tree = new MyBinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
// console.log(JSON.stringify(traverse(tree.root)));
console.log(tree.lookup(17))
// JSON.stringify(traverse(tree.root))


// BFS:
// tree.breadthFirstSearch();
// const ans = tree.breadthFirstSearchR([tree.root], []);
// console.log(ans)

// DFS:
// const ans = tree.DFSInorder([tree.root], []);
// const ans = tree.DFSPreorder([tree.root], []);
// const ans = tree.DFSPostorder([tree.root], []);
// console.log(ans)

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
