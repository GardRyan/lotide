// Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`❤️❤️❤️Assertion Passed: ${actual} = ${expected}`);
//   } else {
//     console.log(`😔😔😔Assertion Failed: ${actual} !== ${expected}`);
//   }
  
// };

function eqArrays(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1.length !== arr2.length) {
      return false;
      //console.log("Array's are different lengths!")
    } else if (arr1[i] !== arr2[i]) {
      //console.log("Arrays are not the same");
      return false;
    }
  }

  //console.log("Arrays are the same");
  return true;
}

function assertArraysEqual() {
  if (eqArrays() === false) {
    console.log("Arrays are not equal!");
  }
  console.log("Arrays are equal!");
}

