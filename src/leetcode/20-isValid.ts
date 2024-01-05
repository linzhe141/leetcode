// 20. 有效的括号

export function isValid(s: string): boolean {
  const map: Record<string, string> = {
    '(': ')',
    '{': '}',
    '[': ']',
  }
  const stack: string[] = []
  for (let i = 0; i < s.length; i++) {
    const charCode = s[i]
    const last = stack[stack.length - 1]
    if (map[last] === charCode) {
      stack.pop()
    } else {
      stack.push(charCode)
    }
  }
  return stack.length === 0
}
