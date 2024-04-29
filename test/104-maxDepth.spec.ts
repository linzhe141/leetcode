import { describe, test, expect } from 'vitest'
import { maxDepth } from 'leetcode/104-maxDepth'
import { createBinaryTreeFromArray } from 'utils/createBinaryTreeFromArray'
describe('leetcode/104-maxDepth', () => {
  test('case1', () => {
    const input = createBinaryTreeFromArray([3, 9, 20, null, null, 15, 7])
    expect(maxDepth(input)).toEqual(3)
  })
  test('case2', () => {
    const input = createBinaryTreeFromArray([1, null, 2])
    expect(maxDepth(input)).toEqual(2)
  })
})
