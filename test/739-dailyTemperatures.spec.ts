import { expect, test, describe } from 'vitest'

import { dailyTemperatures } from 'leetcode/739-dailyTemperatures'

describe('739-dailyTemperatures', () => {
  test('case1', () => {
    expect(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])).toEqual([
      1, 1, 4, 2, 1, 1, 0, 0,
    ])
  })
  test('case2', () => {
    expect(dailyTemperatures([30, 40, 50, 60])).toEqual([1, 1, 1, 0])
  })
  test('case3', () => {
    expect(dailyTemperatures([30, 60, 90])).toEqual([1, 1, 0])
  })
  test('case4', () => {
    expect(
      dailyTemperatures([89, 62, 70, 58, 47, 47, 46, 76, 100, 70]),
    ).toEqual([8, 1, 5, 4, 3, 2, 1, 1, 0, 0])
  })
})
