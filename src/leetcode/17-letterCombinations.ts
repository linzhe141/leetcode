// 17. 电话号码的字母组合

export function letterCombinations(digits: string): string[] {
  const result: string[] = []
  const path: string[] = []
  foo(digits, path, 0)
  return result
  function foo(digits: string, path: string[], start: number) {
    if (path.length && path.length === digits.length) {
      result.push([...path].join(''))
      return
    }

    for (let i = start; i < digits.length; i++) {
      const number = digits[i]
      const numberItemArr = numberMap[number]
      for (let j = 0; j < numberItemArr.length; j++) {
        const item = numberItemArr[j]
        path.push(item)
        foo(digits, path, i + 1)
        path.pop()
      }
    }
  }
}
const numberMap: Record<string, string[]> = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
}
