export function moveZeroes(nums: number[]) {
  let l1 = 0
  let l2 = 0
  // 0 1 0 2 3
  // 1 1 0 2 3 l1 = 1, l2 = 0
  // 1 2 0 2 3 l1 = 3, l2 = 1
  // 1 2 3 2 3 l1 = 4, l2 = 2
  while (l1 <= nums.length) {
    const item = nums[l1]
    if (item != 0 && item !== undefined) {
      nums[l2] = item
      l2++
    }
    l1++
  }
  // 后面的数字都是0了
  for (let i = l2; i < nums.length; i++) {
    nums[i] = 0
  }
}
