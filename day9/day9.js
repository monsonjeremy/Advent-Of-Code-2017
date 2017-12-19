/* eslint-disable no-eval */
/* eslint no-unused-expressions: ["error", { "allowTernary": true }] */
/* eslint-disable no-extend-native */

import fs from 'fs'

// Parse the input by line
const INPUT = fs
  .readFileSync('./day9/day9.txt')
  .toString('utf-8')
  .split('')

// helper function for peeking the top of the stac
Array.prototype.peek = function() {
  if (this.length > 0) {
    return this[this.length - 1]
  }

  return null
}

// Globals
const STACK = []
let IS_GARBAGE = false
let SUM_VAL = 0
let GARBAGE_COUNT = 0

for (let currIndex = 0; currIndex < INPUT.length; currIndex += 1) {
  // If current character is an ignore character we can safely skip forward in the loop
  if (INPUT[currIndex] === '!') {
    currIndex += 1
  } else if (INPUT[currIndex] === '<' && !IS_GARBAGE) {
    // Opening garbage tag, and not already garbage, so flip the garbage state and proceed to next iteration
    IS_GARBAGE = true
  } else if (INPUT[currIndex] === '>' && IS_GARBAGE) {
    // Closing garbage tag, so flip the garbage state and proceed to next iteration
    IS_GARBAGE = false
  } else if (!IS_GARBAGE) {
    // Not garbage, so now we can handle the grouping characters and manipulate the stack
    if (INPUT[currIndex] === '{') {
      STACK.push(STACK.peek() + 1)
    }
    if (INPUT[currIndex] === '}' && STACK.peek()) {
      const popValue = STACK.pop()
      SUM_VAL += popValue
    }
  } else {
    // This is garbage so let's sum it yo
    GARBAGE_COUNT += 1
  }
}

console.log(`Part 1 solution = ${SUM_VAL}`)
console.log(`Part 2 solution = ${GARBAGE_COUNT}`)
