import { expect, test, describe } from 'vitest'

import { rightSideView } from 'leetcode/199-rightSideView'
import { createBinaryTreeFromArray } from 'utils/createBinaryTreeFromArray'

describe('543-rightSideView', () => {
  test('case1', () => {
    const input = createBinaryTreeFromArray([1, 2, 3, null, 5, null, 4])
    expect(rightSideView(input)).toEqual([1, 3, 4])
  })
  test('case2', () => {
    const input = createBinaryTreeFromArray([1, null, 3])
    expect(rightSideView(input)).toEqual([1, 3])
  })
  test('case3', () => {
    const input = createBinaryTreeFromArray([])
    expect(rightSideView(input)).toEqual([])
  })
})
