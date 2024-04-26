import { expect, test, describe } from 'vitest'

import { generate } from 'leetcode/118-generate'

describe('leetcode/118-generate', () => {
  test('case1', () => {
    expect(generate(5)).toEqual([
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1],
    ])
  })
  test('case1', () => {
    expect(generate(1)).toEqual([[1]])
  })
})
