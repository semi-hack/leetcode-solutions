function rotateRight(head: ListNode | null, k: number): ListNode | null {
    for(let i=0; i<k; i++) {
        let node = head;
        while(node.next.next != null) {
        node = node.next
        }
        let end = node.next;
        node.next = null;

        end.next = head;
        head = end;
    }

    return head;
};
