// 98. 验证二叉搜索树

import { TreeNode } from 'types/treeNode'

export function isValidBST(root: TreeNode | null): boolean {
  if (!root) return true
  return dfs(root)
}
function dfs(node: TreeNode, parentNode: TreeNode | null = null): boolean {
  let r1 = true
  let r2 = true
  if (node.left) {
    r1 = dfs(node.left, node) && node.val > node.left.val
  }
  if (node.right) {
    r2 = dfs(node.right, node) && node.val < node.right.val
  }
  if (parentNode) {
    if (node === parentNode.left) {
      if (parentNode.val <= getNodeMaxValue(node)) {
        return false
      }
    }
    if (node === parentNode.right) {
      if (parentNode.val >= getNodeMinValue(node)) {
        return false
      }
    }
  }
  if (!node.left && !node.right) return true
  return r1 && r2
}
function getNodeMaxValue(node: TreeNode) {
  if (node.right) return getNodeMaxValue(node.right)
  else {
    return node.val
  }
}
function getNodeMinValue(node: TreeNode) {
  if (node.left) return getNodeMinValue(node.left)
  else {
    return node.val
  }
}
