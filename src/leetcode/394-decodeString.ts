// 394. 字符串解码

export function decodeString(s: string) {
  let result = ''
  const arr = stringToJson(s)
  function getStr(data: X[]) {
    for (const item of data) {
      for (let i = 0; i < item.repeat; i++) {
        if (!item.children) {
          result += item.content
        } else {
          getStr(item.children)
        }
      }
    }
  }
  getStr(arr)
  return result
}

type X = { repeat: number; content: string; children?: X[] }
function stringToJson(s: string) {
  const arr: X[] = []
  let repeat = 1
  let content = ''
  let nums: string[] = []
  const map = { '[': ']' } as const
  const stack: '['[] = []
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    if (!Number.isNaN(+char)) {
      if (stack.length === 0) {
        nums.push(char)
      }
      if (content && stack.length === 0) {
        arr.push({ repeat, content })
        content = ''
        repeat = 1
      }
      const next = s[i + 1]
      if (stack.length === 0 && next === '[') {
        repeat = +nums.join('')
        nums = []
      }
      if (stack.length) content += char
    } else if (char === '[') {
      stack.push(char)
      if (stack.length === 1) content = ''
      if (stack.length > 1) content += char
    } else if (char === map[stack[stack.length - 1]]) {
      if (stack.length > 1) content += char
      stack.pop()
      if (stack.length === 0) {
        arr.push({ repeat, content })
        content = ''
        repeat = 1
      }
    } else {
      content += char
    }
    if (i === s.length - 1 && content) {
      arr.push({ repeat, content })
    }
  }
  for (const item of arr) {
    if (item.content.includes('[')) {
      item.children = stringToJson(item.content)
    }
  }
  return arr
}
