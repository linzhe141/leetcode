// 198. 打家劫舍

export function rob(nums: number[]): number {
  // [2,1,1,2]
  // f1 = 2
  // f2 = 2
  // f3 = Max(f1 + 1, f2) = 3
  // f4 = Max(f2 + 2, f3) = 4
  const arr: number[] = []
  for (let i = 1; i <= nums.length; i++) {
    if (i === 1) arr[1] = nums[0]
    else if (i === 2) arr[2] = Math.max(nums[0], nums[1])
    else arr[i] = Math.max(arr[i - 2] + nums[i - 1], arr[i - 1])
  }
  return arr[arr.length - 1]
}
