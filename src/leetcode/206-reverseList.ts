// 206. 反转链表

import { ListNode } from 'types/listNode'
//! 通过栈的方式实现
export function reverseList(head: ListNode | null): ListNode | null {
  if (!head) return null
  let h = head
  const list: ListNode[] = [h]
  while (h.next) {
    list.push(h.next)
    h = h.next
  }
  // 1->2->3->4
  let out = list.pop()! // 4
  // 1->2->3
  let temp = out // 4
  while (list.length) {
    const prev = list[list.length - 1] //3
    if (prev) {
      prev.next = null
      temp.next = prev // 4->3
    }
    temp = list.pop()! // 3
  }
  return out
}

//! 双指针实现，debug，就知道其流程了，相当于拆成了两个链表
// export function reverseList(head: ListNode | null): ListNode | null {
//   let h: ListNode | null = head
//   let prev: ListNode | null = null

//   while (h) {
//     // h
//     // 1->2->3->4
//     // p  t

//     // null<-1 2->3->4
//     //       p h
//     const temp: ListNode | null = h.next
//     h.next = prev // 2->1-null
//     prev = h
//     h = temp
//   }
//   return prev
// }
