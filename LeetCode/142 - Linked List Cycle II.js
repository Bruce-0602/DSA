var detectCycle = function(head) {
    if (head == null || head.next == null) return null;
    
    // use fast slow pointer to detect cycle
    let fast = head;
    let slow = head;
    do {
        if (fast.next === null || fast.next.next === null) return null;

        slow = slow.next;
        fast = fast.next.next;
    } while (fast != slow)

    // when cycle detected, find the index by drawing a diagram, remember fast speed is 2 times the slow
    // find out: 2(a + b) = a + b + c -> a = c (which means a pointer travelling from head to the start of cycle 
    // is the same as travelling fron the meeting point to the start of the cycle)
    // then create a helper ointer to determine the index 
    let helper = head;
    while (helper != slow) {
        helper = helper.next;
        slow = slow.next;
    }
    return helper;
};