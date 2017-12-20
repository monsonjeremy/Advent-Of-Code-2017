import { expect } from 'chai'
import fs from 'fs'
import { part1, part2 } from './day8'

const FINAL_INPUT = fs.readFileSync('./day8/day8.txt').toString('utf-8')

describe('Day 08 I heard you like registers', () => {
  describe('part 1', () => {
    it('on input: \n\t\tb inc 5 if a > 1\n\t\ta inc 1 if b < 5\n\t\tc dec -10 if a >= 1\n\t\tc inc -20 if c == 10\n\tshould return 1', done => {
      const input = `b inc 5 if a > 1
      a inc 1 if b < 5
      c dec -10 if a >= 1
      c inc -20 if c == 10`
      const expected = 1
      expect(part1(input)).to.equal(expected)
      done()
    })
    it('on the final input, should return 4416', done => {
      const input = FINAL_INPUT
      const expected = 4416
      expect(part1(input)).to.equal(expected)
      done()
    })
  })
  describe('part 2', () => {
    it('on input: b inc 5 if a > 1\n\t\ta inc 1 if b < 5\n\t\tc dec -10 if a >= 1\n\t\tc inc -20 if c == 10\n\tshould return 10', done => {
      const input = `b inc 5 if a > 1
        a inc 1 if b < 5
        c dec -10 if a >= 1
        c inc -20 if c == 1`
      const expected = 10
      expect(part2(input)).to.equal(expected)
      done()
    })
    it('on the final input, should return 5199', done => {
      const input = FINAL_INPUT
      const expected = 5199
      expect(part2(input)).to.equal(expected)
      done()
    })
  })
})
