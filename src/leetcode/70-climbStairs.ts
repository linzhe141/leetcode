// 70. 爬楼梯

export function climbStairs(n: number): number {
  // fn = fn-1 + fn-2
  const arr: number[] = []
  for (let i = 1; i <= n; i++) {
    if (i === 1) arr[i] = 1
    if (i === 2) arr[i] = 2
    if (i >= 3) {
      arr[i] = arr[i - 1] + arr[i - 2]
    }
  }

  return arr[n]
}
