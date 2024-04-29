import { expect, test, describe } from 'vitest'

import { flatten } from 'leetcode/114-flatten'
import { createBinaryTreeFromArray } from 'utils/createBinaryTreeFromArray'

describe('114-flatten', () => {
  test('case1', () => {
    const input = createBinaryTreeFromArray([1, 2, 5, 3, 4, null, 6])
    const output = createBinaryTreeFromArray([
      1,
      null,
      2,
      null,
      3,
      null,
      4,
      null,
      5,
      null,
      6,
    ])
    flatten(input)
    expect(input).toEqual(output)
  })
  test('case2', () => {
    const input = createBinaryTreeFromArray([])
    const output = createBinaryTreeFromArray([])
    flatten(input)

    expect(input).toEqual(output)
  })
  test('case3', () => {
    const input = createBinaryTreeFromArray([0])
    const output = createBinaryTreeFromArray([0])
    flatten(input)

    expect(input).toEqual(output)
  })
})
