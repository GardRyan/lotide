/*function tail(arr) {
  for (things of arr) {
   if (arr = arr[0]) {
    return null;
   }
  return arr;
  }
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

*/

// Function to compare two parameters const assertEqual = (actual, expected) => { // if both parameters are equal to one another it will pass if (actual === expected) { console.log(🟢🟢🟢 Assertion Passed: ${actual} === ${expected}); // else it will print fail } else { console.log(🛑🛑🛑 Assertion failed: ${actual} !== ${expected}); } };

const tail = (arr) => { 
  let newArr = []; 
  for (let i = 1; i < arr.length; i++) {
    newArr.push(arr[i]); 
    } 
  return newArr;
 };

// Test Case: Check the original array const words = ["Yo Yo", "Lighthouse", "Labs"]; tail(words); // no need to capture the return value since we are not checking it assertEqual(words.length, 3); // original array should still have 3 elements!

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); 
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");