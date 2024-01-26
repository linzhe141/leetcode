import { expect, test, describe } from 'vitest'

import { addTwoNumbers } from 'leetcode/2-addTwoNumbers'
import { createListNodeFromArray } from 'utils/createListNodeFromArray'

describe('leetcode/2-addTwoNumbers', () => {
  test('case1', () => {
    const l1 = createListNodeFromArray([2, 4, 3])
    const l2 = createListNodeFromArray([5, 6, 4])
    const output = createListNodeFromArray([7, 0, 8])
    expect(addTwoNumbers(l1, l2)).toEqual(output)
  })
  test('case2', () => {
    const l1 = createListNodeFromArray([0])
    const l2 = createListNodeFromArray([0])
    const output = createListNodeFromArray([0])
    expect(addTwoNumbers(l1, l2)).toEqual(output)
  })
  test('case3', () => {
    const l1 = createListNodeFromArray([9, 9, 9, 9, 9, 9, 9])
    const l2 = createListNodeFromArray([9, 9, 9, 9])
    const output = createListNodeFromArray([8, 9, 9, 9, 0, 0, 0, 1])
    expect(addTwoNumbers(l1, l2)).toEqual(output)
  })
  test('case4', () => {
    const l1 = createListNodeFromArray([9, 9, 9])
    const l2 = createListNodeFromArray([9])
    const output = createListNodeFromArray([8, 0, 0, 1])
    expect(addTwoNumbers(l1, l2)).toEqual(output)
  })
})
