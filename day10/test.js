import { expect } from 'chai';
import fs from 'fs';
import {
  part1,
  part2,
  reverseSubsection,
  convertInputToAscii,
  xorArray,
  createKnotHash,
  chunkArray
} from './day10';

const FINAL_INPUT = fs.readFileSync('./day10/day10.txt').toString('utf-8');

describe('Day 10: Knot Hash', () => {
  describe('subarray reverse function', () => {
    it('With an input of ([0, 1, 2, 3, 4], 4, 2) it should return [4, 1, 2, 3, 0]', done => {
      const inputs = [[0, 1, 2, 3, 4], 4, 2];
      const expected = [4, 1, 2, 3, 0];
      const result = reverseSubsection(...inputs);
      result.forEach((num, index) => expect(num).to.equal(expected[index]));
      done();
    });
    it('With an input of ([0, 1, 2, 3, 4], 4, 3) it should return [0, 4, 2, 3, 1]', done => {
      const inputs = [[0, 1, 2, 3, 4], 4, 3];
      const expected = [0, 4, 2, 3, 1];
      const result = reverseSubsection(...inputs);
      result.forEach((num, index) => expect(num).to.equal(expected[index]));
      done();
    });
    it('With an input of ([0, 1, 2, 3, 4], 3, 4) it should return [4, 3, 2, 1, 0]', done => {
      const inputs = [[0, 1, 2, 3, 4], 3, 4];
      const expected = [4, 3, 2, 1, 0];
      const result = reverseSubsection(...inputs);
      result.forEach((num, index) => expect(num).to.equal(expected[index]));
      done();
    });
    it('With an input of ([ 2, 1, 0, 3, 4 ], 3, 4) it should return [ 4, 3, 0, 1, 2 ]', done => {
      const inputs = [[2, 1, 0, 3, 4], 3, 4];
      const expected = [4, 3, 0, 1, 2];
      const result = reverseSubsection(...inputs);
      result.forEach((num, index) => expect(num).to.equal(expected[index]));
      done();
    });
  });
  describe('Convert to ASCII function', () => {
    it('Given the input "1,2,3" it should return [49,44,50,44,51,17,31,73,47,23]', done => {
      const input = '1,2,3';
      const expected = [49, 44, 50, 44, 51, 17, 31, 73, 47, 23];
      expect(convertInputToAscii(input)).to.eql(expected);
      done();
    });
  });
  describe('Chunk Array function', () => {
    it('Given the inputs "[1, 2, 3, 4]" and "2" it should return [[1, 2], [3, 4]]', done => {
      const input = [1, 2, 3, 4];
      const expected = [[1, 2], [3, 4]];
      expect(chunkArray(input, 2)).to.eql(expected);
      done();
    });
  });
  describe('XOR Array function', () => {
    it('Given the input "[65, 27, 9, 1, 4, 3, 40, 50, 91, 7, 6, 0, 2, 5, 68, 22]" it should return 64', done => {
      const input = [65, 27, 9, 1, 4, 3, 40, 50, 91, 7, 6, 0, 2, 5, 68, 22];
      const expected = 64;
      expect(xorArray(input)).to.eql(expected);
      done();
    });
  });
  describe('Knot Hash function', () => {
    it('Given the input "[64, 7, 255]" it should return "4007ff"', done => {
      const input = [64, 7, 255];
      const expected = '4007ff';
      expect(createKnotHash(input)).to.equal(expected);
      done();
    });
  });
  describe('part 1', () => {
    it("on inputs '[0, 1, 2, 3, 4]' and '3, 4, 1, 5' should return 12", done => {
      const input = '3,4,1,5';
      const expected = 12;
      expect(part1(input, true)).to.equal(expected);
      done();
    });
    it('on the final input, should return 1935', done => {
      const input = FINAL_INPUT;
      const expected = 1935;
      expect(part1(input, false)).to.equal(expected);
      done();
    });
  });
  describe('part 2', () => {
    it('on the input "", should return "a2582a3a0e66e6e86e3812dcb672a272"', done => {
      const input = '';
      const expected = 'a2582a3a0e66e6e86e3812dcb672a272';
      expect(part2(input, false)).to.equal(expected);
      done();
    });
  });
  describe('part 2', () => {
    it('on the input "AoC 2017", should return "33efeb34ea91902bb2f59c9920caa6cd"', done => {
      const input = 'AoC 2017';
      const expected = '33efeb34ea91902bb2f59c9920caa6cd';
      expect(part2(input, false)).to.equal(expected);
      done();
    });
  });
  describe('part 2', () => {
    it('on the input "1,2,3", should return "3efbe78a8d82f29979031a4aa0b16a9d"', done => {
      const input = '1,2,3';
      const expected = '3efbe78a8d82f29979031a4aa0b16a9d';
      expect(part2(input, false)).to.equal(expected);
      done();
    });
  });
  describe('part 2', () => {
    it('on the input "1,2,4", should return "63960835bcdc130f0b66d7ff4f6a5a8e"', done => {
      const input = '1,2,4';
      const expected = '63960835bcdc130f0b66d7ff4f6a5a8e';
      expect(part2(input, false)).to.equal(expected);
      done();
    });
  });
  describe('part 2', () => {
    it('on the final input, should return 1935', done => {
      const input = FINAL_INPUT;
      const expected = 0;
      expect(part2(input, false)).to.equal(expected);
      done();
    });
  });
});
