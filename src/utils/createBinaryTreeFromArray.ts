import { TreeNode } from 'types/treeNode'

export function createBinaryTreeFromArray(
  array: (number | null)[],
): TreeNode | null {
  if (array.length === 0) {
    return null
  }
  if (array[0] === null) {
    return null
  }
  const queue: Array<TreeNode> = []
  const root = new TreeNode(array[0])

  queue.push(root)
  let firstQueuePos = 0
  let position = 1
  while (queue.length !== firstQueuePos) {
    const localRoot = queue[firstQueuePos++]

    if (array[position] !== undefined && array[position] !== null) {
      localRoot.left = new TreeNode(array[position]!)
      queue.push(localRoot.left)
    }
    position++

    if (array[position] !== undefined && array[position] !== null) {
      localRoot.right = new TreeNode(array[position]!)
      queue.push(localRoot.right)
    }
    position++
  }

  return root
}
