import { expect, test, describe } from 'vitest'

import { findAnagrams } from 'leetcode/438-findAnagrams'

describe('leetcode/131-findAnagrams', () => {
  test('case1', () => {
    expect(findAnagrams('cbaebabacd', 'abc')).toEqual([0, 6])
  })
  // test('case2', () => {
  //   expect(findAnagrams('xcbaebabacd', 'abc')).toEqual([1, 7])
  // })
  // test('case3', () => {
  //   expect(findAnagrams('abab', 'ab')).toEqual([0, 1, 2])
  // })
})
