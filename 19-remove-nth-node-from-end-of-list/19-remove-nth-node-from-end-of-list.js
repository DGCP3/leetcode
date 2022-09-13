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
    var node = head;
    var length = 0;
    while (node) {
        length++;
        node = node.next;
    }
    var index = length - n;
    if (index == 0) {
        return head.next;
    }
    node = head;
    while (index > 1) {
        node = node.next;
        index--;
    }
    node.next = node.next.next;
    return head;
};