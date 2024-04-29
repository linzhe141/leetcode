import { expect, test, describe } from 'vitest'

import { getIntersectionNode } from 'leetcode/160-getIntersectionNode'
import { createListNodeFromArray } from 'utils/createListNodeFromArray'

describe('leetcode/160-getIntersectionNode', () => {
  test('case1', () => {
    const commomNode = createListNodeFromArray([8, 4, 5])
    const headA = createListNodeFromArray([4, 1])
    const headB = createListNodeFromArray([5, 6, 1])
    headA!.next!.next = commomNode
    headB!.next!.next!.next = commomNode
    expect(getIntersectionNode(headA, headB)).toEqual(commomNode)
  })
})
