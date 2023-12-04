// 94. 二叉树的中序遍历

import { TreeNode } from 'types/treeNode'

export function inorderTraversal(root: TreeNode | null): number[] {
  if (root === null) return []
  return dfs(root)
}
function dfs(node: TreeNode, result: number[] = []) {
  if (node.left) dfs(node.left, result)
  result.push(node.val)
  if (node.right) dfs(node.right, result)
  return result
}
