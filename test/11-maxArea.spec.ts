import { expect, test, describe } from 'vitest'

import { maxArea } from 'leetcode/11-maxArea'

describe('leetcode/11-maxArea', () => {
  test('case1', () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49)
  })
  test('case1', () => {
    expect(maxArea([1, 1])).toBe(1)
  })
})
