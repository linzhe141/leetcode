import { expect, test, describe } from 'vitest'

import { buildTree } from 'leetcode/105-buildTree'
import { createBinaryTreeFromArray } from 'utils/createBinaryTreeFromArray'

describe('105-buildTree', () => {
  test('case1', () => {
    const output = createBinaryTreeFromArray([3, 9, 20, null, null, 15, 7])
    const preorder = [3, 9, 20, 15, 7]
    const inorder = [9, 3, 15, 20, 7]
    expect(buildTree(preorder, inorder)).toEqual(output)
  })
  test('case2', () => {
    const output = createBinaryTreeFromArray([-1])
    const preorder = [-1]
    const inorder = [-1]
    expect(buildTree(preorder, inorder)).toEqual(output)
  })
  test('case3', () => {
    const output = createBinaryTreeFromArray([1, null, 2])
    const preorder = [1, 2]
    const inorder = [1, 2]
    expect(buildTree(preorder, inorder)).toEqual(output)
  })
  test('case4', () => {
    const output = createBinaryTreeFromArray([1, 2, null, 3])
    const preorder = [1, 2, 3]
    const inorder = [3, 2, 1]
    expect(buildTree(preorder, inorder)).toEqual(output)
  })
})
