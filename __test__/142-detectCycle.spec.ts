import { expect, test, describe } from 'vitest'

import { detectCycle } from 'leetcode/142-detectCycle'
import { ListNode } from 'types/listNode'

describe('leetcode/142-detectCycle', () => {
  test('case1', () => {
    const h1 = new ListNode(3)
    const h2 = new ListNode(2)
    const h3 = new ListNode(0)
    const h4 = new ListNode(-4)
    h1.next = h2
    h2.next = h3
    h3.next = h4
    h4.next = h2
    expect(detectCycle(h1)).toBe(h2)
  })
  test('case2', () => {
    const h1 = new ListNode(1)
    const h2 = new ListNode(2)
    h1.next = h2
    h2.next = h1
    expect(detectCycle(h1)).toBe(h1)
  })
  test('case3', () => {
    const h1 = new ListNode(1)
    expect(detectCycle(h1)).toBe(null)
  })
  test('case4', () => {
    const h1 = new ListNode(1)
    const h2 = new ListNode(2)
    h1.next = h2
    expect(detectCycle(h1)).toBe(null)
  })
})
