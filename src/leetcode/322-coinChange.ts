// 322. 零钱兑换
export function coinChange(coins: number[], amount: number): number {
  // dp[i][j] 表示前i种硬币（物品），在整数为j的金额（背包），所需的最少硬币个数
  // dp[i][j] = min(dp[i-1][j],dp[i][j-coins[i-1]]+1)
  
  // 由dp[i][j]的i和j可知
  // 矩阵 行是 背包 [j]
  // 矩阵 列是 物品 [i]
  // 初始化和矩阵也是个难点

  // 0-1  背包，放入物品i是[i-1][j-weight[i]]+val[i]
  // 完全 背包，放入物品i是[i][j-weight[i]]+val[i]，因为硬币可以重复选，所有放入i之后，还是可以从前i中硬币选
  // const dp: number[][] = Array(coins.length + 1).fill(Array(amount + 1).fill(0))
  const dp: number[][] = Array(coins.length + 1).fill(Array(amount + 1).fill(0))
  // for (let i = 1; i <= amount; i++) {
  //   dp[i][0] = Infinity
  // }
  for (let j = 1; j <= amount; j++) {
    dp[0][j] = Infinity
  }
  for (let i = 1; i <= coins.length; i++) {
    for (let j = 1; j <= amount; j++) {
      // 硬币的下标是从0开始
      if (coins[i - 1] > j) {
        // 如果当前的硬币i（下标i-1）的值 超过了金额j,既满足下面的j - coins[i - 1] >= 0
        dp[i][j] = dp[i - 1][j]
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - coins[i - 1]] + 1)
      }
    }
  }
  return dp[coins.length][amount] !== Infinity ? dp[coins.length][amount] : -1
}
