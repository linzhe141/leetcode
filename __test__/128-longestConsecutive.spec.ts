import { expect, test, describe } from 'vitest'

import { longestConsecutive } from 'leetcode/128-longestConsecutive'

describe('leetcode/49-groupAnagrams', () => {
  test('case1', () => {
    expect(longestConsecutive([100, 4, 200, 1, 3, 2])).toBe(4)
  })
  test('case2', () => {
    expect(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])).toBe(9)
  })
  test('case3', () => {
    expect(longestConsecutive([])).toBe(0)
  })
})
