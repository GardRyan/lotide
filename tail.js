// create a new array, remove first value
// assertEqual new array
// ensure that old array is the same

const tail = (arr) => { 
  let newArr = []; 
  for (let i = 1; i < arr.length; i++) {
    newArr.push(arr[i]); 
    } 
  return newArr;
 };

 const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`❤️❤️❤️Assertion Passed: ${actual} = ${expected}`);
  }else {
    console.log(`😔😔😔Assertion Failed: ${actual} !== ${expected}`);
  }
  
  }

// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!