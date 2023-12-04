// 1. 两数之和

export function twoSum(nums: number[], target: number): number[] {
  const map: Record<number, number> = {}
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i]
    if (map[target - current] !== undefined) {
      return [map[target - current], i]
    }
    map[current] = i
  }
  return []
}
