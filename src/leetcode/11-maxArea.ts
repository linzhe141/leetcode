// 11. 盛最多水的容器

// 双指针经典套路
export function maxArea(height: number[]): number {
  let left = 0
  let right = height.length - 1
  let max = 0
  // 当两个左右指针重合时，就停止
  while (left < right) {
    const leftH = height[left]
    const rightH = height[right]
    const w = right - left
    // 只有最矮一边才行，否则水会溢出
    const h = Math.min(leftH, rightH)
    const area = w * h
    max = Math.max(max, area)
    //! 那边小，就移动那边，因为要以最矮那边为标准

    // l
    // 1 8 6 2 5 4 8 3 7
    //                 r

    //! 比如一开始的状态 left-> 1 ; right-> 7
    //! 如果移动右边指针，宽度就会减少，而高度还是左指针的1，那么面积始终会变小，不满足
    //! 则该移动左指针
    if (leftH < rightH) {
      left++
    } else {
      right--
    }
  }
  return max
}
