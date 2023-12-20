import { expect, test, describe } from 'vitest'

import { partition } from 'leetcode/131-partition'

describe('leetcode/131-partition', () => {
  test('case1', () => {
    expect(partition('aab')).toEqual([
      ['a', 'a', 'b'],
      ['aa', 'b'],
    ])
  })
  test('case2', () => {
    expect(partition('a')).toEqual([['a']])
  })
})
