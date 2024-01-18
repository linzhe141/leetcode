// 234. 回文链表

import { ListNode } from 'types/listNode'

export function isPalindrome(head: ListNode | null): boolean {
  const listValue: number[] = []
  let current: ListNode | null = head
  while (current) {
    listValue.push(current.val)
    current = current.next
  }
  return listValue.join(',') === [...listValue].reverse().join(',')
}
