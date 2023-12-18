// 39. 组合总和

export function combinationSum(
  candidates: number[],
  target: number,
): number[][] {
  const result: number[][] = []
  const path: number[] = []
  foo(candidates, path, target, 0)
  return result

  function foo(nums: number[], path: number[], target: number, start: number) {
    const currentPathTotal = path.reduce((sum, i) => (sum += i), 0)
    if (currentPathTotal === target) {
      // const sortPath = [...path].sort((a, b) => a - b)
      // if (!result.map((i) => i.join('')).includes(sortPath.join(''))) {
      //   result.push([...sortPath])
      // }
      result.push([...path])
    }
    //! 无重复元素 可以无限制重复被选取同一数字 剪枝
    for (let i = start; i < nums.length; i++) {
      const item = nums[i]
      if (currentPathTotal + item <= target) {
        path.push(item)
        foo(nums, path, target, i) // i 套路
        path.pop()
      }
    }
  }
}
