// 230. 二叉搜索树中第K小的元素

import { TreeNode } from 'types/treeNode'

export function kthSmallest(root: TreeNode | null, k: number): number {
  if (!root) return -1
  const result = dfs(root).sort((a, b) => a - b)
  return result[k - 1]
}
function dfs(node: TreeNode, result: number[] = []) {
  result.push(node.val)
  if (node.left) dfs(node.left, result)
  if (node.right) dfs(node.right, result)
  return result
}
