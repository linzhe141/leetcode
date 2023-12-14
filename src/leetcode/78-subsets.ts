// 78. 子集

export function subsets(nums: number[]): number[][] {
  const result: number[][] = []
  const path: number[] = []
  foo(path, nums, 0)
  return result
  function foo(path: number[], nums: number[], start: number) {
    if (path.length <= nums.length) {
      result.push([...path])
    }
    for (let i = start; i < nums.length; i++) {
      const item = nums[i]
      path.push(item)
      // 剪枝
      // 数组中的元素 互不相同，
      // 这是组合问题，直接从当前的下一个取，就保证了不重复
      foo(path, nums, i + 1)
      path.pop()
    }
  }
}
