import { expect, test, describe } from 'vitest'

import { lengthOfLongestSubstring } from 'leetcode/3-lengthOfLongestSubstring'

describe('leetcode/3-lengthOfLongestSubstring', () => {
  test('case1', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3)
  })
  test('case2', () => {
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1)
  })
  test('case3', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3)
  })
  test('case4', () => {
    expect(lengthOfLongestSubstring('nfpdmpi')).toBe(5)
  })
})
