// 49. 字母异位词分组

export function groupAnagrams(strs: string[]): string[][] {
  const map: Record<string, string[]> = {}
  for (const item of strs) {
    const sortCode = item.split('').sort().join('')
    if (map[sortCode] === undefined) {
      map[sortCode] = [item]
    } else {
      map[sortCode].push(item)
    }
  }
  return Object.values(map)
}
