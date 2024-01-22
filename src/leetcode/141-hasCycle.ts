// 141. 环形链表

import { ListNode } from 'types/listNode'

export function hasCycle(head: ListNode | null): boolean {
  if (!head) return false
  const map = new Map<ListNode, boolean>()
  let current = head
  while (current.next) {
    if (map.get(current) === undefined) {
      map.set(current, true)
    } else {
      return true
    }
    current = current.next
  }
  return false
}
