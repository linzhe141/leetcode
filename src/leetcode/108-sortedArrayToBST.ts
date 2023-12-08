// 108. 将有序数组转换为二叉搜索树

import { TreeNode } from 'types/treeNode'

// TODO
export function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (!nums.length) return null
  return foo(nums, 0, nums.length - 1)
}

function foo(nums: number[], start: number, end: number) {
  if (end < start) return null
  const index = Math.ceil((end + start) / 2) //*
  const node = new TreeNode(nums[index])
  node.left = foo(nums, start, index - 1)
  node.right = foo(nums, index + 1, end)
  return node
}
