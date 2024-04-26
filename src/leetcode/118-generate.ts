// 118. 杨辉三角
export function generate(numRows: number): number[][] {
  const arr: number[][] = []
  for (let i = 0; i < numRows; i++) {
    const row: number[] = []
    for (let j = 0; j <= i; j++) {
      if (j === 0) {
        row.push(1)
      } else if (j == i) {
        row.push(1)
      } else {
        row.push(arr[i - 1][j - 1] + arr[i - 1][j])
      }
    }
    arr.push(row)
  }
  return arr
}
