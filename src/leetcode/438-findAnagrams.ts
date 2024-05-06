// 438. 找到字符串中所有字母异位词(列题套路，需要理解记忆)
// https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247485141&idx=1&sn=0e4583ad935e76e9a3f6793792e60734
export function findAnagrams(s: string, p: string): number[] {
  const map: Record<string, number> = {}
  // 窗口中的字符
  const window: Record<string, number> = {}
  for (const a of p) {
    // 统计需要的字符
    map[a] = (map[a] || 0) + 1
  }
  // 左右指针
  let left = 0,
    right = 0
  let valid = 0
  const res = []
  while (right < s.length) {
    // 即将移入窗口的字符
    const r_char = s[right]
    // 右移窗口
    right++
    if (map[r_char]) {
      // 当前字符在需要的字符中，则更新当前窗口统计
      window[r_char] = (window[r_char] || 0) + 1
      // 当前窗口和需要的字符匹配时，验证数量增加1
      if (window[r_char] === map[r_char]) {
        valid++
      }
    }

    while (right - left >= p.length) {
      if (valid == Object.keys(map).length) {
        res.push(left)
      }
      const l_char = s[left]
      left++
      if (map[l_char]) {
        if (window[l_char] === map[l_char]) {
          valid--
        }
        window[l_char]--
      }
    }
  }

  return res
}
