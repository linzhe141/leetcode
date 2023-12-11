// 35. 搜索插入位置

export function searchInsert(nums: number[], target: number): number {
  return foo(nums, target, 0, nums.length - 1)
}

function foo(nums: number[], target: number, start: number, end: number) {
  if (end < start) return start
  const midIndex = Math.floor((start + end) / 2)
  const midValue = nums[midIndex]
  if (start === end) {
    if (midValue < target) {
      return midIndex + 1
    }
    if (midValue > target) {
      return midIndex
    }
  }
  if (target > midValue) {
    return foo(nums, target, midIndex + 1, end)
  } else if (target < midValue) {
    return foo(nums, target, start, midIndex - 1)
  } else {
    return midIndex
  }
}
