// 160. 相交链表

import { ListNode } from 'types/listNode'

export function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null,
): ListNode | null {
  let ha = headA
  let hb = headB
  if (ha === hb) return ha
  while (ha) {
    while (hb) {
      if (ha === hb) return ha
      hb = hb.next
    }
    ha = ha.next
    hb = headB
  }
  return null
}
