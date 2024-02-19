// 155. 最小栈

export class MinStack {
  min = Infinity
  stack: number[] = []
  sortArr: number[] = []
  constructor() {}

  push(val: number): void {
    this.min = Math.min(val, this.min)
    this.stack.push(val)
    if (val > this.min) {
      this.sortArr.push(val)
    } else {
      this.sortArr.unshift(val)
    }
  }
  pop(): void {
    const prevLast = this.stack.pop()
    if (prevLast === this.sortArr[0]) {
      this.sortArr.shift()
    } else {
      this.sortArr.pop()
    }
    this.min = this.getMin()
  }

  top(): number {
    const length = this.stack.length
    return this.stack[length - 1]
  }

  getMin(): number {
    return this.sortArr[0]
  }
}
