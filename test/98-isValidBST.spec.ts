import { expect, test, describe } from 'vitest'

import { isValidBST } from 'leetcode/98-isValidBST'
import { createBinaryTreeFromArray } from 'utils/createBinaryTreeFromArray'

describe('98-isValidBST', () => {
  test('case1', () => {
    const input = createBinaryTreeFromArray([2, 1, 3])
    expect(isValidBST(input)).toBe(true)
  })
  test('case2', () => {
    const input = createBinaryTreeFromArray([5, 1, 4, null, null, 3, 6])
    expect(isValidBST(input)).toBe(false)
  })
  test('case3', () => {
    const input = createBinaryTreeFromArray([5, 4, 6, null, null, 3, 7])
    expect(isValidBST(input)).toBe(false)
  })
  test('case4', () => {
    const input = createBinaryTreeFromArray([3, 1, 5, 0, 2, 4, 6])
    expect(isValidBST(input)).toBe(true)
  })
  test('case5', () => {
    const input = createBinaryTreeFromArray([
      120, 70, 140, 50, 100, 130, 160, 20, 55, 75, 110, 119, 135, 150, 200,
    ])
    expect(isValidBST(input)).toBe(false)
  })
  test('case6', () => {
    const input = createBinaryTreeFromArray([
      3,
      1,
      5,
      0,
      2,
      4,
      6,
      null,
      null,
      null,
      3,
    ])
    expect(isValidBST(input)).toBe(false)
  })
})
