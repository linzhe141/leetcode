// 39. 组合总和

export function combinationSum(
  candidates: number[],
  target: number,
): number[][] {
  const result: number[][] = []
  const path: number[] = []
  foo(candidates, path, target)
  return result

  // TODO 待优化
  function foo(nums: number[], path: number[], target: number) {
    const currentPathTotal = path.reduce((sum, i) => (sum += i), 0)
    if (currentPathTotal === target) {
      const sortPath = [...path].sort((a, b) => a - b)
      if (!result.map((i) => i.join('')).includes(sortPath.join(''))) {
        result.push([...sortPath])
      }
    }
    for (let i = 0; i < nums.length; i++) {
      const item = nums[i]
      if (currentPathTotal + item <= target) {
        path.push(item)
        foo(nums, path, target)
        path.pop()
      }
    }
  }
}
