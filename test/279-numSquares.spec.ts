import { expect, test, describe } from 'vitest'

import { numSquares } from 'leetcode/279-numSquares'

describe('leetcode/279-numSquares', () => {
  test('case1', () => {
    expect(numSquares(12)).toBe(3)
  })
  test('case2', () => {
    expect(numSquares(13)).toBe(2)
  })
})
