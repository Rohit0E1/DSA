/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    
    let curr = head;
    let rem = new ListNode();
    rem.next = head;
    let res = rem;
    while(curr){
        curr = curr.next;
        --n;
        if(n<0) rem = rem.next;
    }

    rem.next = rem && rem.next ? rem.next.next : null ;
    return res.next;
};