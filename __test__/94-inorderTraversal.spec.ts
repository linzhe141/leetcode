import { expect, test, describe } from 'vitest'

import { inorderTraversal } from 'leetcode/94-inorderTraversal'
import { createBinaryTreeFromArray } from 'utils/createBinaryTreeFromArray'
describe('leetcode/94-inorderTraversal', () => {
  test('case1', () => {
    const input = createBinaryTreeFromArray([1, null, 2, 3])
    expect(inorderTraversal(input)).toEqual([1, 3, 2])
  })
  test('case2', () => {
    const input = createBinaryTreeFromArray([])
    expect(inorderTraversal(input)).toEqual([])
  })
  test('case3', () => {
    const input = createBinaryTreeFromArray([1])
    expect(inorderTraversal(input)).toEqual([1])
  })
})
