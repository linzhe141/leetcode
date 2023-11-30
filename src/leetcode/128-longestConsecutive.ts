export function longestConsecutive(nums: number[]): number {
  if (nums.length === 0) return 0
  const arr = Array.from(new Set(nums.sort((a, b) => a - b)))
  let max = 1
  let temp = 1
  for (let i = 0; i < arr.length - 1; i++) {
    const current = arr[i]
    const next = arr[i + 1]
    if (next - current === 1) {
      temp++
    } else {
      temp = 1
    }
    max = Math.max(max, temp)
  }
  return max
}
