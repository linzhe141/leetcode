import { expect, test, describe } from 'vitest'

import { isValid } from 'leetcode/20-isValid'

describe('leetcode/20-isValid', () => {
  test('case1', () => {
    expect(isValid('()')).toBe(true)
  })
  test('case1', () => {
    expect(isValid('()[]{}')).toBe(true)
  })
  test('case1', () => {
    expect(isValid('(]')).toBe(false)
  })
})
