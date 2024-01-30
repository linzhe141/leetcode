// 46. 全排列

export function permute(nums: number[]): number[][] {
  const result: number[][] = []
  const selectArr = nums.map(() => false)
  foo(nums, result)
  return result

  // 回溯模板
  // https://www.hello-algo.com/chapter_backtracking/permutations_problem/#1321
  function foo(nums: number[], result: number[][], path: number[] = []) {
    // 终止条件
    if (path.length === nums.length) {
      result.push([...path])
      return
    }
    for (let i = 0; i < nums.length; i++) {
      // 剪枝
      if (selectArr[i] === false) {
        selectArr[i] = true
        path.push(nums[i])
        foo(nums, result, path)
        path.pop()
        selectArr[i] = false
      }
    }
  }
}
