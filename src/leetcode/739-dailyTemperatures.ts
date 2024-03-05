// 739. 每日温度
//! 经典的单调栈

export function dailyTemperatures(temperatures: number[]): number[] {
  const result: number[] = []
  const stack: { value: number; index: number }[] = []

  // dubug 了解详细流程
  // 首先是逆序
  //! 循环 然后如果当前的值大于等于栈尾那么出栈 保持栈尾的数据要大于当前的数据
  // 每次都要入栈
  for (let i = temperatures.length - 1; i >= 0; i--) {
    const item = temperatures[i]
    while (stack.length && stack[stack.length - 1].value <= item) {
      stack.pop()
    }
    if (stack.length === 0) {
      // result.unshift(0)
      result[i] = 0
    } else {
      // result.unshift(stack[stack.length - 1].index - i)
      result[i] = stack[stack.length - 1].index - i
    }
    stack.push({ value: item, index: i })
  }
  return result
}

//! 超时
// export function dailyTemperatures(temperatures: number[]): number[] {
//   const result: number[] = []
//   for (let i = 0; i < temperatures.length - 1; i++) {
//     for (let j = i + 1; j < temperatures.length; j++) {
//       if (temperatures[j] > temperatures[i]) {
//         result.push(j - i)
//         break
//       }
//       if (j === temperatures.length - 1) {
//         result.push(0)
//       }
//     }
//   }
//   result.push(0)
//   return result
// }
