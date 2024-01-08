import { ListNode } from 'types/listNode'

export function createListNodeFromArray(data: number[]): ListNode | null {
  if (data.length === 0 || data[0] === null) return null
  const head = new ListNode(data[0])
  let x = head
  const otherNodes = data.slice(1)
  for (const item of otherNodes) {
    const node = new ListNode(item)
    x.next = node
    x = node
  }
  return head
}
