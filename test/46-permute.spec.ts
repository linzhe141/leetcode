import { expect, test, describe } from 'vitest'

import { permute } from 'leetcode/46-permute'

describe('leetcode/46-permute', () => {
  test('case1', () => {
    expect(permute([1, 2, 3])).toEqual([
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ])
  })
  test('case2', () => {
    expect(permute([0, 1])).toEqual([
      [0, 1],
      [1, 0],
    ])
  })
  test('case3', () => {
    expect(permute([1])).toEqual([[1]])
  })
})
