import { expect, test, describe } from 'vitest'

import { levelOrder } from 'leetcode/102-levelOrder'
import { createBinaryTreeFromArray } from 'utils/createBinaryTreeFromArray'

describe('leetcode/102-levelOrder', () => {
  test('case1', () => {
    const input = createBinaryTreeFromArray([3, 9, 20, null, null, 15, 7])
    expect(levelOrder(input)).toEqual([[3], [9, 20], [15, 7]])
  })
  test('case2', () => {
    const input = createBinaryTreeFromArray([1])
    expect(levelOrder(input)).toEqual([[1]])
  })
  test('case3', () => {
    const input = createBinaryTreeFromArray([])
    expect(levelOrder(input)).toEqual([])
  })
})
