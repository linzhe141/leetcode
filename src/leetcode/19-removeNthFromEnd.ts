// 19. 删除链表的倒数第 N 个结点

import { ListNode } from 'types/listNode'

export function removeNthFromEnd(
  head: ListNode | null,
  n: number,
): ListNode | null {
  let cur = head
  const arr: ListNode[] = []
  while (cur) {
    arr.push(cur)
    cur = cur.next
  }
  arr.splice(arr.length - n, 1)
  if (!arr.length) return null
  const result = arr[0]
  result.next = null
  let h = result
  for (const item of arr.slice(1)) {
    item.next = null
    h.next = item
    h = h.next
  }
  return result
}
