// 236. 二叉树的最近公共祖先

import { TreeNode } from 'types/treeNode'

export function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null,
): TreeNode | null {
  const pathResult: TreeNode[][] = []
  //! 题目描述: p 和 q 均存在于给定的二叉树中。
  //! 所以root，p，q都不存在都不为null
  dfs(root!, p!, q!, [], pathResult)
  const shortPath =
    pathResult[0].length <= pathResult[1].length ? pathResult[0] : pathResult[1]
  const longPath =
    pathResult[0].length > pathResult[1].length ? pathResult[0] : pathResult[1]
  for (let i = 0; i < longPath.length; i++) {
    if (shortPath[i + 1] !== longPath[i + 1]) return shortPath[i]
  }
  return null
}

function dfs(
  node: TreeNode,
  p: TreeNode,
  q: TreeNode,
  path: TreeNode[],
  result: TreeNode[][],
) {
  path.push(node)
  if (node === p || node === q) {
    result.push([...path])
  }
  if (node.left) dfs(node.left, p, q, path, result)
  if (node.right) dfs(node.right, p, q, path, result)
  path.pop()
}
