import { TreeNode } from 'types/treeNode'

export function createBinaryTreeFromArray(
  data: (number | null)[],
): TreeNode | null {
  if (data.length === 0 || data[0] === null) return null

  const root = new TreeNode(data[0])
  const queue: TreeNode[] = [root]

  for (let i = 1; i < data.length; i++) {
    const currentNode = queue[0]

    if (data[i] !== null) {
      const newNode = new TreeNode(data[i]!)
      if (i % 2 !== 0) {
        currentNode.left = newNode
      } else {
        currentNode.right = newNode
        queue.shift() // Done adding children for current node, so remove it from queue
      }
      queue.push(newNode)
    } else {
      if (i % 2 === 0) {
        queue.shift() // No more children for current node, so remove it from queue
      }
    }
  }

  return root
}
