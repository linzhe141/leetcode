import { expect, test, describe } from 'vitest'

import { lowestCommonAncestor } from 'leetcode/236-lowestCommonAncestor'
import { createBinaryTreeFromArray } from 'utils/createBinaryTreeFromArray'

describe('236-lowestCommonAncestor', () => {
  test('case1', () => {
    const root = createBinaryTreeFromArray([
      3,
      5,
      1,
      6,
      2,
      0,
      8,
      null,
      null,
      7,
      4,
    ])
    const p = root?.left!
    const q = root?.right!
    expect(lowestCommonAncestor(root, p, q)).toEqual(root)
  })
  test('case2', () => {
    const root = createBinaryTreeFromArray([
      3,
      5,
      1,
      6,
      2,
      0,
      8,
      null,
      null,
      7,
      4,
    ])
    const p = root?.left!
    const q = root?.left?.right?.right!
    expect(lowestCommonAncestor(root, p, q)).toEqual(p)
  })
  test('case3', () => {
    const root = createBinaryTreeFromArray([
      3,
      5,
      1,
      6,
      2,
      0,
      8,
      null,
      null,
      7,
      4,
    ])
    const p = root
    const q = root?.right!
    expect(lowestCommonAncestor(root, p, q)).toEqual(p)
  })
})
