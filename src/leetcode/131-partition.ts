// 131. 分割回文串

export function partition(s: string): string[][] {
  const result: string[][] = []
  const path: string[] = []
  foo(s, path)
  return result
  function foo(s: string, path: string[]) {
    if (s.length === 0) {
      result.push([...path])
      return
    }
    // 按照字符进行拆分，
    // 比如 :a,ab
    // 比如 :a,b
    // 比如 :aa,b
    for (let i = 1; i <= s.length; i++) {
      const charCode = s.slice(0, i)
      if (charCode.split('').reverse().join('') === charCode) {
        path.push(charCode)
        foo(s.slice(i), path)
        path.pop()
      }
    }
  }
}
