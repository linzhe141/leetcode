import { expect, test, describe } from 'vitest'

import { subsets } from 'leetcode/78-subsets'

describe('leetcode/78-subsets', () => {
  test('case1', () => {
    expect(subsets([1, 2, 3]).length).toEqual(
      [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]].length,
    )
  })
  test('case2', () => {
    expect(subsets([0])).toEqual([[], [0]])
  })
})
