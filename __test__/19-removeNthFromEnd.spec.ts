import { expect, test, describe } from 'vitest'

import { removeNthFromEnd } from 'leetcode/19-removeNthFromEnd'
import { ListNode } from 'types/listNode'

describe('leetcode/19-removeNthFromEnd', () => {
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

    const nodeArr = [h1, h2, h3, h4, h5]
    const actralOutput = removeNthFromEnd(h1, 2)
    expect(actralOutput).toEqual(h1)
    const temp: ListNode[] = []
    let cur = actralOutput
    while (cur) {
      temp.push(cur)
      cur = cur.next
    }
    expect(temp.map((i) => i.val)).toEqual([1, 2, 3, 5])
    for (const item of temp) {
      expect(nodeArr.includes(item)).toBe(true)
    }
  })
  test('case2', () => {
    const h1 = new ListNode(1)
    const h2 = new ListNode(2)
    h1.next = h2

    const nodeArr = [h1, h2]
    const actralOutput = removeNthFromEnd(h1, 1)
    expect(actralOutput).toEqual(h1)
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
  test('case3', () => {
    const h1 = new ListNode(1)
    const h2 = new ListNode(2)
    const h3 = new ListNode(3)
    h1.next = h2
    h2.next = h3

    const nodeArr = [h1, h2, h3]
    const actralOutput = removeNthFromEnd(h1, 1)
    expect(actralOutput).toEqual(h1)
    const temp: ListNode[] = []
    let cur = actralOutput
    while (cur) {
      temp.push(cur)
      cur = cur.next
    }
    expect(temp.map((i) => i.val)).toEqual([1, 2])
    for (const item of temp) {
      expect(nodeArr.includes(item)).toBe(true)
    }
  })
})
