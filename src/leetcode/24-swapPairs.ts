// 24. 两两交换链表中的节点

import { ListNode } from 'types/listNode'

export function swapPairs(head: ListNode | null): ListNode | null {
  let i = 0
  let cur = head
  const arr: ListNode[] = []
  while (cur) {
    if (i % 2 == 0) {
      arr[i + 1] = cur
    } else {
      arr[i - 1] = cur
    }
    cur = cur.next
    i++
  }

  const temp = arr.filter((i) => i)
  if (!temp.length) return null
  const result = temp[0]
  let h = result
  h.next = null
  for (const item of temp.slice(1)) {
    item.next = null
    h.next = item
    h = h.next
  }
  return result
}
