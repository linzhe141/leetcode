import { expect, test, describe } from 'vitest'

import { searchInsert } from 'leetcode/35-searchInsert'

describe('leetcode/35-searchInsert', () => {
  test('case1', () => {
    expect(searchInsert([1, 3, 5, 6], 5)).toBe(2)
  })
  test('case2', () => {
    expect(searchInsert([1, 3, 5, 6], 2)).toBe(1)
  })
  test('case3', () => {
    expect(searchInsert([1, 3, 5, 6], 7)).toBe(4)
  })
  test('case4', () => {
    expect(searchInsert([1, 3, 5, 6], 0)).toBe(0)
  })
  test('case5', () => {
    expect(searchInsert([1, 3], 0)).toBe(0)
  })
})
