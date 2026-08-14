/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head) return false;
    let map = new Map();
    let curr = head;
    while(curr.next != null){
        if(!map.has(curr)) {map.set(curr)}
        else {return true}
        curr = curr.next;
    }
    return false;
};