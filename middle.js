// find the middle of the array
// return those results
//
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');


const middle = function(array) {
  const arrayLength = array.length

  
  if (arrayLength < 2) {
    console.log([]); 
    return;
  }

  const middleIndex = Math.floor(arrayLength / 2);

  if (middleIndex % 2 === 0) {
     console.log([array[middleIndex - 1], array[middleIndex]]);
  } 
  console.log([array[middleIndex]]);
}


// TEST CODE
// ...
middle([1]) // => []
middle([1, 2]) // => []
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

module.exports = middle;