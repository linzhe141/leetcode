import { expect, test, describe } from 'vitest'

import { isSymmetric } from 'leetcode/101-isSymmetric'
import { createBinaryTreeFromArray } from 'utils/createBinaryTreeFromArray'
describe('leetcode/49-groupAnagrams', () => {
  test('case1', () => {
    const input = createBinaryTreeFromArray([1, 2, 2, null, 3, null, 3])
    expect(isSymmetric(input)).toBe(false)
  })
  test('case2', () => {
    const input = createBinaryTreeFromArray([1, 2, 2, 3, 4, 4, 3])
    expect(isSymmetric(input)).toBe(true)
  })
  test('case3', () => {
    const input = createBinaryTreeFromArray([1, 2, 2, null, 3, 3])
    expect(isSymmetric(input)).toBe(true)
  })
})
