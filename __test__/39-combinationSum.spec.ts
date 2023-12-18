import { expect, test, describe } from 'vitest'

import { combinationSum } from 'leetcode/39-combinationSum'

describe('leetcode/39-combinationSum', () => {
  test('case1', () => {
    expect(combinationSum([2, 3, 6, 7], 7)).toEqual([[2, 2, 3], [7]])
  })
  test('case2', () => {
    expect(combinationSum([2, 3, 5], 8)).toEqual([
      [2, 2, 2, 2],
      [2, 3, 3],
      [3, 5],
    ])
  })
  test('case3', () => {
    expect(combinationSum([2], 1)).toEqual([])
  })
  test('case4', () => {
    expect(combinationSum([8, 7, 4, 3], 11)).toEqual([
      [3, 8],
      [4, 7],
      [3, 4, 4],
    ])
  })
})
