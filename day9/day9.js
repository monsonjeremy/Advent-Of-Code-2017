/* eslint-disable no-eval */
/* eslint no-unused-expressions: ["error", { "allowTernary": true }] */
/* eslint-disable no-extend-native */

import fs from 'fs'

// helper function for peeking the top of the stac
Array.prototype.peek = function() {
  if (this.length > 0) {
    return this[this.length - 1]
  }

  return null
}

// Parse the input by line
const INPUT = fs
  .readFileSync('./day9/day9.txt')
  .toString('utf-8')
  .split('')

// Globals
const STACK = []
let IS_GARBAGE = false
let SUM_VAL = 0
let GARBAGE_COUNT = 0

for (let currIndex = 0; currIndex < INPUT.length; currIndex += 1) {
  // If current character is an ignore character we can safely skip forward in the loop
  if (INPUT[currIndex] === '!') currIndex += 1
  else if (IS_GARBAGE)
    // It's garbage, just inc garbage count
    GARBAGE_COUNT += 1
  else if (INPUT[currIndex] === '<' && !IS_GARBAGE)
    // Opening garbage tag, flip garbage state
    IS_GARBAGE = true
  else if (INPUT[currIndex] === '>' && IS_GARBAGE)
    // Closing garbage tag, flip garbage state
    IS_GARBAGE = false
  else if (INPUT[currIndex] === '{')
    // Push onto the stack for opening group char
    STACK.push(STACK.peek() + 1)
  else if (INPUT[currIndex] === '}')
    // Pop off the stack for closing group char and add to the sum
    SUM_VAL += STACK.pop()
}

console.log(`Part 1 solution = ${SUM_VAL}`)
console.log(`Part 2 solution = ${GARBAGE_COUNT}`)
