import { expect, test, describe } from 'vitest'

import { coinChange } from 'leetcode/322-coinChange'

describe('leetcode/322-coinChange', () => {
  test('case1', () => {
    expect(coinChange([1, 2, 5], 11)).toBe(3)
  })
  test('case2', () => {
    expect(coinChange([2], 3)).toBe(-1)
  })
  test('case3', () => {
    expect(coinChange([1], 0)).toBe(0)
  })
  test('case4', () => {
    expect(coinChange([2147483647], 2)).toBe(-1)
  })
  test('case5', () => {
    expect(coinChange([2, 5, 10, 1], 27)).toBe(4)
  })
})
