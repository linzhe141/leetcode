// 21. 合并两个有序链表

import { ListNode } from 'types/listNode'

export function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  const result: ListNode[] = []
  let current1 = list1
  while (current1) {
    result.push(current1)
    current1 = current1.next
  }
  let current2 = list2
  while (current2) {
    result.push(current2)
    current2 = current2.next
  }
  result.sort((a, b) => a.val - b.val)
  if (result.length === 0) return null
  const output = result[0]
  let cur = output
  for (const item of result.slice(1)) {
    cur.next = item
    cur = item
  }
  return output
}
