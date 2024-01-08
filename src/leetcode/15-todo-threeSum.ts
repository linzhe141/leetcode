// 15. 三数之和

//! 回溯会超时 TODO
export function threeSum(nums: number[]): number[][] {
  nums = nums.sort((a, b) => a - b)
  const res: number[][] = []
  const path: number[] = []
  foo(nums, path, 0, 0)
  const map: Record<string, true> = {}
  const result: number[][] = []
  for (const item of res) {
    const hash = item.sort((a, b) => a - b).join('')
    if (!map[hash]) {
      map[hash] = true
      result.push(item)
    }
  }
  return result
  function foo(nums: number[], path: number[], start: number, sum: number) {
    if (path.length === 3 && sum === 0) {
      res.push([...path])
      return
    }
    for (let i = start; i < nums.length; i++) {
      const item = nums[i]
      if (path.length < 3) {
        path.push(item)
        foo(nums, path, i + 1, sum + item)
        path.pop()
      }
    }
  }
}
