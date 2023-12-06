import { expect, test, describe } from 'vitest'

import { diameterOfBinaryTree } from 'leetcode/543-diameterOfBinaryTree'
import { createBinaryTreeFromArray } from 'utils/createBinaryTreeFromArray'

describe('leetcode/49-groupAnagrams', () => {
  test('case1', () => {
    const input = createBinaryTreeFromArray([1, 2, 3, 4, 5])
    expect(diameterOfBinaryTree(input)).toBe(3)
  })
  test('case2', () => {
    const input = createBinaryTreeFromArray([1, 2])
    expect(diameterOfBinaryTree(input)).toBe(1)
  })
})
