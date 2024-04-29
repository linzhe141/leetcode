// 无重复字符的最长子串
export function lengthOfLongestSubstring(s: string): number {
  let l = 0
  let r = 0
  let max = 0
  const map: Record<string, number> = {}
  while (r < s.length && l < s.length) {
    const char = s[l]
    if (!map[char]) {
      map[char] = 1
      max = Math.max(l - r + 1, max)
      l++
    } else {
      map[char]++
      while (map[s[l]] > 1) {
        map[s[r]]--
        r++
      }
    }
    l++
  }
  return max
}
