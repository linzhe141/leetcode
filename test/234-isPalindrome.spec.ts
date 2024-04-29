import { expect, test, describe } from 'vitest'

import { isPalindrome } from 'leetcode/234-isPalindrome'
import { createListNodeFromArray } from 'utils/createListNodeFromArray'

describe('leetcode/234-isPalindrome', () => {
  test('case1', () => {
    const head = createListNodeFromArray([1, 2, 2, 1])
    expect(isPalindrome(head)).toBe(true)
  })
  test('case2', () => {
    const head = createListNodeFromArray([1, 2])
    expect(isPalindrome(head)).toBe(false)
  })
  test('case3', () => {
    const head = createListNodeFromArray([1])
    expect(isPalindrome(head)).toBe(true)
  })
  test('case4', () => {
    const head = createListNodeFromArray([1, 0, 1])
    expect(isPalindrome(head)).toBe(true)
  })
})
