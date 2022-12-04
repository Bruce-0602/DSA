/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    // special case1 - only 1 element
    if (head == null) return head;
    if (head.next == null) return head;

    let prevNode = null;
    let currNode = head;
    let nextNode = head.next;
    while (true) {
        currNode.next = prevNode;
        prevNode = currNode;
        // when loop to the end of LL
        if (nextNode == null){
            head = currNode;
            break;
        }
        currNode = nextNode.next;
        nextNode.next = prevNode;
        prevNode = nextNode;
        // add a check
        if (currNode == null) {
            head = nextNode;
            break;
        }
        nextNode = currNode.next;
    }
    return head
};