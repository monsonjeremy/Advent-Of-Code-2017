/* eslint-disable no-eval */
/* eslint no-unused-expressions: ["error", { "allowTernary": true }] */
/* eslint-disable no-extend-native */

// helper function for peeking the top of the stac
Array.prototype.peek = function() {
  if (this.length > 0) {
    return this[this.length - 1]
  }

  return null
}

export function part1(INPUT) {
  // Globals
  const STACK = []
  let IS_GARBAGE = false
  let SUM_VAL = 0
  let GARBAGE_COUNT = 0

  for (let index = 0, char = INPUT[0]; index < INPUT.length; index += 1, char = INPUT[index]) {
    if (char === '!') index += 1
    else if (char === '>' && IS_GARBAGE) IS_GARBAGE = false
    else if (IS_GARBAGE) GARBAGE_COUNT += 1
    else if (char === '<' && !IS_GARBAGE) IS_GARBAGE = true
    else if (char === '{') STACK.push(STACK.peek() + 1)
    else if (char === '}') SUM_VAL += STACK.pop()
  }

  return SUM_VAL
}

export function part2(INPUT) {
  // Globals
  const STACK = []
  let IS_GARBAGE = false
  let SUM_VAL = 0
  let GARBAGE_COUNT = 0

  for (let index = 0, char = INPUT[0]; index < INPUT.length; index += 1, char = INPUT[index]) {
    if (char === '!') index += 1
    else if (char === '>' && IS_GARBAGE) IS_GARBAGE = false
    else if (IS_GARBAGE) GARBAGE_COUNT += 1
    else if (char === '<' && !IS_GARBAGE) IS_GARBAGE = true
    else if (char === '{') STACK.push(STACK.peek() + 1)
    else if (char === '}') SUM_VAL += STACK.pop()
  }

  return GARBAGE_COUNT
}
