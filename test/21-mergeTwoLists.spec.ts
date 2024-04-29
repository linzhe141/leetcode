import { expect, test, describe } from 'vitest'

import { mergeTwoLists } from 'leetcode/21-mergeTwoLists'
import { ListNode } from 'types/listNode'

describe('leetcode/21-mergeTwoLists', () => {
  test('case1', () => {
    const h1_1 = new ListNode(1)
    const h1_2 = new ListNode(2)
    const h1_3 = new ListNode(4)
    h1_1.next = h1_2
    h1_2.next = h1_3

    const h2_1 = new ListNode(1)
    const h2_2 = new ListNode(3)
    const h2_3 = new ListNode(4)
    h2_1.next = h2_2
    h2_2.next = h2_3

    const nodeArr = [h1_1, h1_2, h1_3, h2_1, h2_2, h2_3]

    const actualOutput = mergeTwoLists(h1_1, h2_1)

    const temp: ListNode[] = []
    let cur = actualOutput
    while (cur) {
      temp.push(cur)
      cur = cur.next
    }
    expect(temp.map((i) => i.val)).toEqual([1, 1, 2, 3, 4, 4])
    for (const item of temp) {
      expect(nodeArr.includes(item)).toBe(true)
    }
  })
})
