import { expect, test, describe } from 'vitest'

import { moveZeroes } from 'leetcode/283-moveZeroes'

describe('leetcode/283-moveZeroes', () => {
  test('case1', () => {
    const input = [0, 1, 0, 3, 12]
    moveZeroes(input)
    expect(input).toEqual([1, 3, 12, 0, 0])
  })
  test('case2', () => {
    const input = [0]
    moveZeroes(input)
    expect(input).toEqual([0])
  })
  test('case3', () => {
    const input = [1]
    moveZeroes(input)
    expect(input).toEqual([1])
  })
})
