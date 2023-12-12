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
    // 左子节点要小于自身
    r1 = dfs(node.left, node) && node.val > node.left.val
  }
  if (node.right) {
    // 右子节点要大于自身
    r2 = dfs(node.right, node) && node.val < node.right.val
  }
  // 至少满足 node.left.val < node.val < node.right.val
  if (r1 && r2 && parentNode) {
    if (node === parentNode.left) {
      // 如果当前节点是其父节点的左节点
      // 那么其父节点要 大于 当前节点那棵树中的最大值
      if (parentNode.val <= getNodeMaxValue(node)) {
        return false
      }
    }
    if (node === parentNode.right) {
      // 如果当前节点是其父节点的右节点
      // 那么其父节点要 小于 当前节点那棵树中的最小值
      if (parentNode.val >= getNodeMinValue(node)) {
        return false
      }
    }
  }
  if (!node.left && !node.right) return true
  return r1 && r2
}
// 这里的node，已经经历dfs的第一层验证，
// 即node.left.val < node.val < node.right.val
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
