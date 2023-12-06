// 543. 二叉树的直径

import { TreeNode } from 'types/treeNode'

export function diameterOfBinaryTree(root: TreeNode | null): number {
  let max = 0

  if (!root) return 0
  dfs(root)
  return max

  // 1、获取每个节点左右子树的最大值
  // 2、再对每个节点的左右子树的最大值取和，用max表示每个节点的"左右最大值和"的最大值
  function dfs(node: TreeNode) {
    let r1 = 0
    let r2 = 0
    if (node.left) r1 = dfs(node.left) + 1
    if (node.right) r2 = dfs(node.right) + 1
    if (!node.left && !node.right) return 0
    max = Math.max(max, r1 + r2)
    return Math.max(r1, r2)
  }
}
