import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    alias: {
      leetcode: './src/leetcode',
      types: './src/types',
      utils: './src/utils',
    },
  },
})
