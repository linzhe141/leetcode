import { expect, test, describe } from 'vitest'

import { decodeString } from 'leetcode/394-decodeString'

describe('leetcode/394-decodeString', () => {
  test('case1', () => {
    expect(decodeString('3[a]2[bc]')).toBe('aaabcbc')
  })
  test('case2', () => {
    expect(decodeString('dd3[a2[c]]ww')).toBe('ddaccaccaccww')
  })
  test('case3', () => {
    expect(decodeString('2[abc]3[cd]ef')).toBe('abcabccdcdcdef')
  })
  test('case4', () => {
    expect(decodeString('abc3[cd]xyz')).toBe('abccdcdcdxyz')
  })
  test('case5', () => {
    let expectData = ''
    for (let i = 0; i < 100; i++) {
      expectData += 'leetcode'
    }
    expect(decodeString('100[leetcode]')).toBe(expectData)
  })
  test('case6', () => {
    expect(decodeString('2[ab3[cd]]4[xy]')).toBe('abcdcdcdabcdcdcdxyxyxyxy')
  })
  test('case7', () => {
    expect(decodeString('3[a10[bc]]')).toBe(
      'abcbcbcbcbcbcbcbcbcbcabcbcbcbcbcbcbcbcbcbcabcbcbcbcbcbcbcbcbcbc',
    )
  })
})
