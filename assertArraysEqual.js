// Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.
const eqArrays = require('.../eqArrays');


const assertArraysEqual = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1.length !== arr2.length || arr1[i] !== arr2[i]) {
      console.log("😔😔😔Arrays " + arr1 + " and " + arr2 + " are not equal!");
      return;
    }
  }

  console.log("😊😊😊Arrays are equal!");
};


assertArraysEqual([1,2,3], [1,2,3]);
assertArraysEqual([1,3], [1,2,3]);
assertArraysEqual([1,2,6], [1,2,3]);
assertArraysEqual([1,3], [2,3]);

module.exports = assertArraysEqual;