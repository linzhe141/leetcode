// 199. 二叉树的右视图

import { TreeNode } from 'types/treeNode'

export function rightSideView(root: TreeNode | null): number[] {
  if (!root) return []
  const result: number[] = []
  const levelMap: Record<number, number> = {}

  dfs(root)
  return Object.keys(levelMap)
    .map((i) => +i)
    .sort((a, b) => a - b)
    .map((i) => levelMap[i])

  function dfs(node: TreeNode, level = 0) {
    levelMap[level] = node.val
    if (node.left) dfs(node.left, level + 1)
    if (node.right) dfs(node.right, level + 1)
    return result
  }
}
