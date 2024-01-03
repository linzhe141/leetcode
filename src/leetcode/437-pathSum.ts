// 437. 路径总和 III

import { TreeNode } from 'types/treeNode'

export function pathSum(root: TreeNode | null, targetSum: number): number {
  if (!root) return 0
  const res: true[] = []

  dfs(root)
  return res.length
  function foo(node: TreeNode, currentSum: number) {
    currentSum += node.val
    if (currentSum === targetSum) {
      res.push(true)
    }
    if (node.left) {
      foo(node.left, currentSum)
    }
    if (node.right) {
      foo(node.right, currentSum)
    }
  }

  function dfs(node: TreeNode) {
    foo(node, 0)
    if (node.left) dfs(node.left)
    if (node.right) dfs(node.right)
  }
}
// !回溯方案会超时，回溯和普通递归的区别，就是回溯知道路径(递归与递归直接的状态)，普通递归不关心路径
// function pathSum(root: TreeNode | null, targetSum: number): number {
//   if (!root) return 0
//   const res: number[][] = []

//   dfs(root)
//   return res.length
//   function foo(node: TreeNode, path: number[]) {
//     path.push(node.val)
//     if (path.reduce((sum, i) => (sum += i), 0) === targetSum) {
//       res.push([...path])
//       return
//     }
//     if (node.left) {
//       foo(node.left, path)
//       path.pop()
//     }
//     if (node.right) {
//       foo(node.right, path)
//       path.pop()
//     }
//   }

//   function dfs(node: TreeNode) {
//     const path: number[] = []
//     foo(node, path)
//     if (node.left) dfs(node.left)
//     if (node.right) dfs(node.right)
//   }
// }
