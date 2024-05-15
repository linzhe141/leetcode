import { expect, test, describe } from 'vitest'

import { subarraySum } from 'leetcode/560-subarraySum'

describe('560-subarraySum', () => {
  test('case1', () => {
    expect(subarraySum([1, 1, 1], 2)).toBe(2)
  })
  test('case2', () => {
    expect(subarraySum([1, 2, 3], 3)).toBe(2)
  })
  test('case3', () => {
    expect(subarraySum([1], 0)).toBe(0)
  })
  test('case4', () => {
    expect(subarraySum([-1, -1, 1], 0)).toBe(1)
  })

  test('case5', () => {
    expect(subarraySum([28, 54, 7, -70, 22, 65, -6], 100)).toBe(1)
  })
})
