class Fibonacci {
  *execute (input, current = 0, next = 1) {
    // console.count('execute!')
    if (input === 0) {
      return 0
    }
    // returns the value of the current iteration
    yield current
    // delegates the execution to the next iteration
    yield* this.execute(input - 1, next, current + next)
  }
}

module.exports = Fibonacci