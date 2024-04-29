import { expect, test, describe } from 'vitest'

import { rob } from 'leetcode/198-rob'

describe('leetcode/198-rob', () => {
  test('case1', () => {
    expect(rob([1, 2, 3, 1])).toBe(4)
  })
  test('case2', () => {
    expect(rob([2, 7, 9, 3, 1])).toBe(12)
  })
  test('case3', () => {
    expect(rob([2, 1, 1, 2])).toBe(4)
  })
})
