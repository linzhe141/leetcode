// 101. 对称二叉树

import { TreeNode } from 'types/treeNode'

export function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true
  if (root.left && !root.right) return false
  if (!root.left && root.right) return false
  if (!root.left && !root.right) return true
  return dfs(root.left!, root.right!)
}
function dfs(leftNode: TreeNode, rightNode: TreeNode): boolean {
  let r1 = true
  let r2 = true
  if (leftNode.left && rightNode.right) r1 = dfs(leftNode.left, rightNode.right)
  if (leftNode.right && rightNode.left) r2 = dfs(leftNode.right, rightNode.left)
  if (leftNode.val !== rightNode.val) return false
  if (leftNode.left && !rightNode.right) return false
  if (leftNode.right && !rightNode.left) return false
  if (rightNode.left && !leftNode.right) return false
  if (rightNode.right && !leftNode.left) return false
  if (
    !leftNode.left &&
    !leftNode.right &&
    !rightNode.left &&
    !rightNode.right &&
    leftNode.val === rightNode.val
  )
    return true
  return r1 && r2
}
