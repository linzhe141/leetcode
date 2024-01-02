// 105. 从前序与中序遍历序列构造二叉树

import { TreeNode } from 'types/treeNode'

// TODO recode
//! 通过前序和中序，可以确定左右子树
//! 重点就是如何确定左右子树的前序和中序遍历数组

//! 比如[3,9,20,null,null,15,7]，前序[3, 9, 20, 15, 7]，中序[9, 3, 15, 20, 7]
//! 前序遍历的第一个点表示树的根节点 root:3
//! 前序遍历的点，在中序遍历中，又可以确定左右子树 root:3 在中序遍历的index是1，
//! 那么对应3的左子树的中序就是 left_inorder = inorder(0, (1:index) ) => [9]
//! 那么对应3的右子树的中序就是 rightt_inorder = inorder( (1:index) + 1) => [15,20,7]
//! 在前序遍历中如何确定左右子树的前序遍历
//! 那么对应3的左子树的前序就是 left_preorder = preorder(1, (1:index) + 1) => [9]
//! 那么对应3的右子树的前序就是 right_preorder = preorder( (1:index) + 1) => [20,15,7]
export function buildTree(
  preorder: number[],
  inorder: number[],
): TreeNode | null {
  if (preorder.length === 0) return null

  const root = new TreeNode(preorder[0])
  const index = inorder.findIndex((i) => i === preorder[0])

  const left_inorder = inorder.slice(0, index)
  const right_inorder = inorder.slice(index + 1)

  const left_preorder = preorder.slice(1, index + 1)
  const right_preorder = preorder.slice(index + 1)

  root.left = buildTree(left_preorder, left_inorder)
  root.right = buildTree(right_preorder, right_inorder)
  return root
}
