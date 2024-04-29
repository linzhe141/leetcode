import { expect, test, describe } from 'vitest'

import { groupAnagrams } from 'leetcode/49-groupAnagrams'

describe('leetcode/49-groupAnagrams', () => {
  test('case1', () => {
    const result = groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])
    const caseResult = [['bat'], ['nat', 'tan'], ['ate', 'eat', 'tea']]
    expect(result.length).toBe(caseResult.length)
  })
  test('case2', () => {
    expect(groupAnagrams([''])).toEqual([['']])
  })
  test('case3', () => {
    expect(groupAnagrams(['a'])).toEqual([['a']])
  })
})
