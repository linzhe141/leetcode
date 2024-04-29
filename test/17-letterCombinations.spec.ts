import { expect, test, describe } from 'vitest'

import { letterCombinations } from 'leetcode/17-letterCombinations'

describe('leetcode/17-letterCombinations', () => {
  test('case1', () => {
    expect(letterCombinations('23')).toEqual([
      'ad',
      'ae',
      'af',
      'bd',
      'be',
      'bf',
      'cd',
      'ce',
      'cf',
    ])
  })
  test('case2', () => {
    expect(letterCombinations('')).toEqual([])
  })
  test('case3', () => {
    expect(letterCombinations('2')).toEqual(['a', 'b', 'c'])
  })
})
