function tail(arr) {
  arr.shift(0);
  return arr;
  }


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`❤️❤️❤️Assertion Passed: ${actual} = ${expected}`);
  }else {
    console.log(`😔😔😔Assertion Failed: ${actual} !== ${expected}`);
  }
  
  }
  
const result = tail(["Hello", "Lighthouse", "Labs"]);

console.log(result);

assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!