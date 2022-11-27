/*
BFS cannot take below situation into account:
		5
	4		6
		3		7

where 3 < 5 but got placed in the right subtree of 5

use DFS
*/
// https://leetcode.com/problems/validate-binary-search-tree/solutions/32112/learn-one-iterative-inorder-traversal-apply-it-to-multiple-tree-questions-java-solution/

var isValidBST = function(root) {
    if(root == null) {
        return true;
    }
    var stack = [];
    var prev = null;
    var node = root;
    while (stack.length > 0 || node !== null){
        while (node != null){
            stack.push(node);
            node = node.left;
        }
        node = stack.pop();
        if(prev !== null && node.val <= prev.val) return false;
        prev = node;
        node = node.right;
    }
    return true;
};

// recursive
var isValidBST = function(root) {
    if(root.right==null && root.left==null)return true;
    return validatorR(root, Number.MIN_VALUE, Number.MAX_VALUE);
};

function validatorR(node, min, max) {
    // if (min > max) return false;

    if (node == null) return true;

    if (node.val <= min || node.val >= max) return false;

    return validatorR(node.left, min, node.val) && validatorR(node.right, node.val, max);
}