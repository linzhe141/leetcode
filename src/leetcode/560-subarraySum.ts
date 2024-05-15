export function subarraySum(nums: number[], k: number): number {
  let result = 0
  const preSum = Array(nums.length).fill(0)
  preSum[0] = 0
  // 前缀和
  for (let i = 0; i < nums.length; i++) {
    preSum[i + 1] = preSum[i] + nums[i]
  }
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (preSum[j + 1] - preSum[i] === k) {
        result++
      }
    }
  }
  return result
}
