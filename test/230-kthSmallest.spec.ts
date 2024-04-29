import { expect, test, describe } from 'vitest'

import { kthSmallest } from 'leetcode/230-kthSmallest'
import { createBinaryTreeFromArray } from 'utils/createBinaryTreeFromArray'

describe('543-kthSmallest', () => {
  test('case1', () => {
    const input = createBinaryTreeFromArray([3, 1, 4, null, 2])
    expect(kthSmallest(input, 1)).toBe(1)
  })
  test('case2', () => {
    const input = createBinaryTreeFromArray([5, 3, 6, 2, 4, null, null, 1])
    expect(kthSmallest(input, 3)).toBe(3)
  })
})
