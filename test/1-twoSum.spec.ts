import { expect, test, describe } from 'vitest'

import { twoSum } from 'leetcode/1-twoSum'

describe('leetcode/1-twoSum', () => {
  test('case1', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
  })
  test('case2', () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2])
  })
  test('case3', () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1])
  })
})
