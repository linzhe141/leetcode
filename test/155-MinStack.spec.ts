import { expect, test, describe } from 'vitest'

import { MinStack } from 'leetcode/155-MinStack'

describe('leetcode/155-MinStack', () => {
  test('case1', () => {
    const minStack = new MinStack()
    minStack.push(-2)
    minStack.push(0)
    minStack.push(-3)
    expect(minStack.getMin()).toBe(-3)
    minStack.pop()
    expect(minStack.top()).toBe(0)
    minStack.pop()
    expect(minStack.getMin()).toBe(-2)
  })
})
