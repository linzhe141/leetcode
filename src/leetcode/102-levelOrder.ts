// 102. 二叉树的层序遍历

import { TreeNode } from 'types/treeNode'

export function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return []
  // return [bfs(root)]
  return dfs(root)
}

function dfs(node: TreeNode, level = 1, result: Record<number, number[]> = {}) {
  if (!result[level]) {
    result[level] = [node.val]
  } else {
    result[level].push(node.val)
  }
  if (node.left) dfs(node.left, level + 1, result)
  if (node.right) dfs(node.right, level + 1, result)
  return Object.values(result)
}

// function bfs(node: TreeNode) {
//   const queue = [node]
//   let head = null
//   const result = []
//   while (queue.length) {
//     head = queue.shift()!
//     result.push(head.val)
//     if (head.left) {
//       queue.push(head.left)
//     }
//     if (head.right) {
//       queue.push(head.right)
//     }
//   }
//   return result
// }
