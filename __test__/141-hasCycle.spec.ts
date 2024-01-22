import { expect, test, describe } from 'vitest'

import { hasCycle } from 'leetcode/141-hasCycle'
import { ListNode } from 'types/listNode'

describe('leetcode/141-hasCycle', () => {
  test('case1', () => {
    const h1 = new ListNode(3)
    const h2 = new ListNode(2)
    const h3 = new ListNode(0)
    const h4 = new ListNode(-4)
    h1.next = h2
    h2.next = h3
    h3.next = h4
    h4.next = h2
    expect(hasCycle(h1)).toBe(true)
  })
  test('case2', () => {
    const h1 = new ListNode(1)
    const h2 = new ListNode(2)
    h1.next = h2
    h2.next = h1
    expect(hasCycle(h1)).toBe(true)
  })
  test('case3', () => {
    const h1 = new ListNode(1)
    expect(hasCycle(h1)).toBe(false)
  })
  test('case4', () => {
    const h1 = new ListNode(1)
    const h2 = new ListNode(2)
    h1.next = h2
    expect(hasCycle(h1)).toBe(false)
  })
})
