/* eslint-disable no-extend-native */
/* eslint-disable func-names */

export function chunkArray(array, groupsize) {
  const sets = [];
  let i = 0;
  const chunks = array.length / groupsize;

  while (i < chunks) {
    sets[i] = array.splice(0, groupsize);
    i += 1;
  }

  return sets;
}

function generateInputList(isTest) {
  if (isTest) {
    return [0, 1, 2, 3, 4];
  }
  // Create an array of values from 0 -> 255
  return [...Array(256).keys()];
}

export function xorArray(arr) {
  // eslint-disable-next-line no-bitwise
  return arr.reduce((accum, curr) => accum ^ curr);
}

export function convertInputToAscii(input) {
  if (input.length === 0) {
    return [17, 31, 73, 47, 23];
  }

  const newInput = [];
  for (let i = 0; i < input.length; i += 1) {
    const ascii = input.charCodeAt(i);
    newInput.push(ascii);
  }
  return newInput.concat([17, 31, 73, 47, 23]);
}

export function createKnotHash(arr) {
  return arr.reduce((accum, curr) => {
    if (curr.toString(16).length === 1) return `${accum}0${curr.toString(16)}`;
    return accum + curr.toString(16);
  }, '');
}

export function reverseSubsection(array, start, length) {
  // store length for efficiency
  const arrayLen = array.length;

  // The actual overlapping value is the remainder of length / arrayLen
  length %= arrayLen;

  if (start + length <= arrayLen) {
    // Easy mode, just reverse the sub array and concatenate
    return [
      ...array.slice(0, start),
      ...array.slice(start, start + length).reverse(),
      ...array.slice(start + length)
    ];
  }

  // The amount we wrap
  const wrapAmount = length - (arrayLen - start);
  const reversedSubArr = [...array.slice(start), ...array.slice(0, wrapAmount)].reverse();

  // Concatenate it into one array
  return [
    ...reversedSubArr.slice(length - wrapAmount),
    ...array.slice(wrapAmount, start),
    ...reversedSubArr.slice(0, length - wrapAmount)
  ];
}

function recursiveHandler(
  inputList,
  inputLengths,
  currLengthIndex,
  position,
  skipSize,
  numRounds = 0,
  performRounds = false
) {
  // eslint-disable-next-line
  return tailRecursion(
    inputList,
    inputLengths,
    currLengthIndex,
    position,
    skipSize,
    numRounds,
    performRounds
  );
}

function tailRecursion(
  inputList,
  inputLengths,
  currLengthIndex,
  position,
  skipSize,
  numRounds = 0,
  performRounds = false
) {
  // If not base case then create the new list and pass to the recursive step

  const length = parseInt(inputLengths[currLengthIndex], 10);
  const modifiedList = reverseSubsection(inputList, position, length);
  const modListLength = modifiedList.length;

  // Increment as given in the instructions
  position += length + skipSize;

  // Account for position wrapping
  if (position > modListLength - 1) {
    position %= modListLength;
  }
  currLengthIndex += 1;
  skipSize += 1;

  // base case
  if (currLengthIndex > inputLengths.length - 1) {
    if (!performRounds) {
      return modifiedList;
    }

    if (numRounds < 63) {
      numRounds += 1;
      return recursiveHandler(modifiedList, inputLengths, 0, position, skipSize, numRounds, true);
    }
    return modifiedList;
  }

  // (Recursion (Recursion (Recursion (Recursion))))
  return recursiveHandler(
    modifiedList,
    inputLengths,
    currLengthIndex,
    position,
    skipSize,
    numRounds,
    performRounds
  );
}

export function part1(inputLengths, isTest = true) {
  // Handle inputs
  const inputList = generateInputList(isTest);
  inputLengths = inputLengths.split(',');

  const finalList = recursiveHandler(inputList, inputLengths, 0, 0, 0);

  return finalList[0] * finalList[1];
}

export function part2(inputLengths, isTest = true) {
  // Handle inputs
  const inputList = generateInputList(isTest);

  // Split the input, turn it into ASCII, then concat the array from instructions
  inputLengths = convertInputToAscii(inputLengths);

  const sparseHash = recursiveHandler(inputList, inputLengths, 0, 0, 0, 0, true);

  const chunkSparseHash = chunkArray(sparseHash, 16);

  const denseHash = chunkSparseHash.map(chunk => xorArray(chunk));

  const knotHash = createKnotHash(denseHash);

  return knotHash;
}
