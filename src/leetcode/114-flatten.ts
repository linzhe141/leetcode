// 114. 二叉树展开为链表

import { TreeNode } from 'types/treeNode'

export function flatten(root: TreeNode | null): void {
  if (!root) return
  const result = dfs(root)
  foo(root, 0)
  function foo(node: TreeNode, i: number) {
    node.val = result[i]
    node.left = null
    if (i + 1 <= result.length - 1) {
      const nextNode = new TreeNode()
      node.right = nextNode
      foo(nextNode, i + 1)
    }
  }
}
function dfs(node: TreeNode, result: number[] = []) {
  result.push(node.val)
  if (node.left) dfs(node.left, result)
  if (node.right) dfs(node.right, result)
  return result
}
