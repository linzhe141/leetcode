// 142. 环形链表 II

import { ListNode } from 'types/listNode'

export function detectCycle(head: ListNode | null): ListNode | null {
  if (!head) return null
  const map = new Map<ListNode, boolean>()
  let current = head
  while (current.next) {
    if (map.get(current) === undefined) {
      map.set(current, true)
    } else {
      return current
    }
    current = current.next
  }
  return null
}
