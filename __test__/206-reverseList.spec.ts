import { expect, test, describe } from 'vitest'

import { reverseList } from 'leetcode/206-reverseList'
import { ListNode } from 'types/listNode'

describe('leetcode/206-reverseList', () => {
  test('case1', () => {
    const h1 = new ListNode(1)
    const h2 = new ListNode(2)
    const h3 = new ListNode(3)
    const h4 = new ListNode(4)
    const h5 = new ListNode(5)
    h1.next = h2
    h2.next = h3
    h3.next = h4
    h4.next = h5
    expect(reverseList(h1)).toBe(h5)
  })
  test('case2', () => {
    const h1 = new ListNode(1)
    const h2 = new ListNode(2)
    h1.next = h2
    expect(reverseList(h1)).toBe(h2)
  })
  test('case3', () => {
    expect(reverseList(null)).toBe(null)
  })
})
