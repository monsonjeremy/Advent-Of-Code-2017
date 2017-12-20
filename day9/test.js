import { expect } from 'chai'
import fs from 'fs'
import { part1, part2 } from './day9'

const FINAL_INPUT = fs.readFileSync('./day9/day9.txt').toString('utf-8')

describe('Day 09 Stream-Processing', () => {
  describe('part 1', () => {
    it("on input '{{<ab>},{<ab>},{<ab>},{<ab>}}' should return 9", done => {
      const input = '{{<ab>},{<ab>},{<ab>},{<ab>}}'
      const expected = 9
      expect(part1(input)).to.equal(expected)
      done()
    })
    it("on input '{{<ab>},{<ab>},{<ab>},{<ab>}}' should return 9", done => {
      const input = '{{<ab>},{<ab>},{<ab>},{<ab>}}'
      const expected = 9
      expect(part1(input)).to.equal(expected)
      done()
    })
    it("on input '{{{},{},{{}}}}' should return 16", done => {
      const input = '{{{},{},{{}}}}'
      const expected = 16
      expect(part1(input)).to.equal(expected)
      done()
    })
    it('on the final input, should return 16869', done => {
      const input = FINAL_INPUT
      const expected = 16869
      expect(part1(input)).to.equal(expected)
      done()
    })
  })
  describe('part 2', () => {
    it("on input '<>' should return 0", done => {
      const input = '<>'
      const expected = 0
      expect(part2(input)).to.equal(expected)
      done()
    })
    it(`on input '<{o"i!a,<{i<a>' should return 10`, done => {
      const input = `<{o"i!a,<{i<a>`
      const expected = 10
      expect(part2(input)).to.equal(expected)
      done()
    })
    it('on the final input, should return 7284', done => {
      const input = FINAL_INPUT
      const expected = 7284
      expect(part2(input)).to.equal(expected)
      done()
    })
  })
})
