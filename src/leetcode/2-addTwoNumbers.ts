// 2. 两数相加

import { ListNode } from 'types/listNode'

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  let cur1 = l1
  let cur2 = l2
  let arr: ListNode[] = []
  let falg = false
  while (cur1 || cur2) {
    cur1 = cur1 ?? new ListNode(0)
    cur2 = cur2 ?? new ListNode(0)
    const i = new ListNode((cur1.val + cur2.val + (falg ? 1 : 0)) % 10)
    falg = cur1.val + cur2.val + (falg ? 1 : 0) >= 10
    arr.push(i)
    cur1 = cur1.next
    cur2 = cur2.next
  }
  if (falg) {
    arr.push(new ListNode(1))
  }
  if (arr.length === 0) return null
  const result = new ListNode(arr[0].val)
  let h = result
  for (const i of arr.slice(1)) {
    h.next = i
    h = h.next
  }
  return result
}
