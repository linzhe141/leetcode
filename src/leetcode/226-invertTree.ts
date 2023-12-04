// 226. 翻转二叉树

import { TreeNode } from 'types/treeNode'

export function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null
  return dfs(root)
}
function dfs(node: TreeNode) {
  if (node.left) dfs(node.left)
  if (node.right) dfs(node.right)
  if (node.left || node.right) {
    const leftNode = node.left
    const rightNode = node.right
    node.left = rightNode
    node.right = leftNode
  }
  return node
}
