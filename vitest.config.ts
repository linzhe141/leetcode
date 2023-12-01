import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    // https://github.com/rollup/plugins/tree/master/packages/alias#entries
    alias: [
      { find: /^leetcode\/(.*)/, replacement: './src/leetcode/$1.ts' },
      { find: /^types\/(.*)/, replacement: './src/types/$1.ts' },
      { find: /^utils\/(.*)/, replacement: './src/utils/$1.ts' },
    ],
  },
})
