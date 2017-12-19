/* eslint-disable no-eval */

import fs from 'fs'

// Parse the input by line
const INP = fs
  .readFileSync('./day8.txt')
  .toString('utf-8')
  .split(/[\r\n]+/)

// Globals
let ALL_TIME_MAX = 0
const REGISTERS = {}

INP.forEach(line => {
  // Split each line into it's different parts
  const [instruction, condition] = line.trim().split(' if ')
  const [register, incOrDec, amount] = instruction.split(/\s+/g)
  const [condRegister, operator, condValue] = condition.split(/\s+/g)
  // readability
  const currentRegister = REGISTERS[register]
  // Create the register in the registers object if it isn't there yet
  if (!currentRegister) {
    REGISTERS[register] = {
      value: 0,
    }
  }

  if (!REGISTERS[condRegister]) {
    REGISTERS[condRegister] = {
      value: 0,
    }
  }

  // if the condition is true, then increment or decrement by given amount
  if (eval(`${REGISTERS[condRegister].value} ${operator} ${condValue}`)) {
    // eslint-disable-next-line
    incOrDec === 'inc'
      ? (REGISTERS[register].value += parseInt(amount, 10))
      : (REGISTERS[register].value -= parseInt(amount, 10))
  }

  Object.keys(REGISTERS).forEach(key => {
    if (REGISTERS[key].value > ALL_TIME_MAX) ALL_TIME_MAX = REGISTERS[key].value
  })
})

let maxVal = 0

Object.keys(REGISTERS).forEach(key => {
  if (REGISTERS[key].value > maxVal) maxVal = REGISTERS[key].value
})

console.log(`Answer to part 1 = ${maxVal}`)
console.log(`Answer to part 2 = ${ALL_TIME_MAX}`)
