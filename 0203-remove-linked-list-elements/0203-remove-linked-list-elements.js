/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let newNode = new ListNode();

    newNode.next = head;
    let res = newNode;

    while(newNode && newNode.next != null){
        if(newNode.next.val == val){
            newNode.next = newNode.next.next;
        }else{
            newNode = newNode.next;
        }
    }
    return res.next;
};