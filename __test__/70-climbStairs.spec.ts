import { expect, test, describe } from 'vitest'

import { climbStairs } from 'leetcode/70-climbStairs'

describe('leetcode/70-climbStairs', () => {
  test('case1', () => {
    expect(climbStairs(2)).toBe(2)
  })
  test('case1', () => {
    expect(climbStairs(3)).toBe(3)
  })
})
