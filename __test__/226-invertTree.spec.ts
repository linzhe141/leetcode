import { expect, test, describe } from 'vitest'

import { invertTree } from 'leetcode/226-invertTree'
import { createBinaryTreeFromArray } from 'utils/createBinaryTreeFromArray'

describe('leetcode/226-invertTree', () => {
  test('case1', () => {
    const input = createBinaryTreeFromArray([4, 2, 7, 1, 3, 6, 9])
    const output = createBinaryTreeFromArray([4, 7, 2, 9, 6, 3, 1])
    expect(invertTree(input)).toEqual(output)
  })
  test('case2', () => {
    const input = createBinaryTreeFromArray([2, 1, 3])
    const output = createBinaryTreeFromArray([2, 3, 1])
    expect(invertTree(input)).toEqual(output)
  })
  test('case3', () => {
    const input = createBinaryTreeFromArray([])
    const output = createBinaryTreeFromArray([])
    expect(invertTree(input)).toEqual(output)
  })
})
