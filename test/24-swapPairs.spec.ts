import { expect, test, describe } from 'vitest'

import { swapPairs } from 'leetcode/24-swapPairs'
import { ListNode } from 'types/listNode'

describe('leetcode/24-swapPairs', () => {
  test('case1', () => {
    const h1 = new ListNode(1)
    const h2 = new ListNode(2)
    const h3 = new ListNode(3)
    const h4 = new ListNode(4)
    h1.next = h2
    h2.next = h3
    h3.next = h4

    const nodeArr = [h1, h2, h3, h4]
    const actralOutput = swapPairs(h1)
    const temp: ListNode[] = []
    let cur = actralOutput
    while (cur) {
      temp.push(cur)
      cur = cur.next
    }
    expect(temp.map((i) => i.val)).toEqual([2, 1, 4, 3])
    for (const item of temp) {
      expect(nodeArr.includes(item)).toBe(true)
    }
  })

  test('case2', () => {
    const h1 = new ListNode(1)

    const nodeArr = [h1]
    const actralOutput = swapPairs(h1)
    const temp: ListNode[] = []
    let cur = actralOutput
    while (cur) {
      temp.push(cur)
      cur = cur.next
    }
    expect(temp.map((i) => i.val)).toEqual([1])
    for (const item of temp) {
      expect(nodeArr.includes(item)).toBe(true)
    }
  })
})
