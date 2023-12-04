// 104. 二叉树的最大深度

import { TreeNode } from 'types/treeNode'

export function maxDepth(root: TreeNode | null): number {
  if (!root) return 0
  return foo(root)
}
function foo(node: TreeNode): number {
  let leftMax = 0
  let rightMax = 0
  if (node.left) leftMax = foo(node.left) + 1
  if (node.right) rightMax = foo(node.right) + 1
  if (!node.left && !node.right) return 1
  return Math.max(leftMax, rightMax)
}
