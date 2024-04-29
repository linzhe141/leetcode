import { expect, test, describe } from 'vitest'

import { sortedArrayToBST } from 'leetcode/108-sortedArrayToBST'
import { createBinaryTreeFromArray } from 'utils/createBinaryTreeFromArray'

describe('108-sortedArrayToBST', () => {
  test('case1', () => {
    const input = [-10, -3, 0, 5, 9]
    const output = createBinaryTreeFromArray([0, -3, 9, -10, null, 5])
    expect(sortedArrayToBST(input)).toEqual(output)
  })
  test('case2', () => {
    const input = [1, 3]
    const output = createBinaryTreeFromArray([3, 1])
    expect(sortedArrayToBST(input)).toEqual(output)
  })
})
