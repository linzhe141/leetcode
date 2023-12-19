// 22. 括号生成

// TODO 优化性能
export function generateParenthesis(n: number): string[] {
  const result: string[] = []
  const path: string[] = []
  const inputArr: string[] = []
  for (let i = 0; i < n; i++) {
    inputArr.push('(')
  }
  for (let i = 0; i < n; i++) {
    inputArr.push(')')
  }
  foo(inputArr, path)
  return result
  function foo(inputArr: string[], path: string[]) {
    if (path.length === n * 2) {
      if (isValid(path)) {
        const str = [...path].join('')
        if (!result.includes(str)) result.push([...path].join(''))
      }
      return
    }
    // 选前面的"("和后面的"("，本质上是同一个东西
    const duplicated = new Set()
    for (let i = 0; i < inputArr.length; i++) {
      const item = inputArr[i]
      if (!duplicated.has(item)) {
        duplicated.add(item)
        path.push(item)
        foo(inputArr, path)
        path.pop()
      }
    }
  }
}

function isValid(str: string[]) {
  const stack: string[] = []
  const map: Record<string, string> = { '(': ')' }
  for (let i = 0; i < str.length; i++) {
    const charCode = str[i]

    const lastCode = stack[stack.length - 1]
    if (lastCode && map[lastCode] === charCode) {
      stack.pop()
    } else {
      stack.push(charCode)
    }
  }
  return stack.length === 0
}
