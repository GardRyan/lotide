//assertArraysEqual Function

const assertArraysEqual = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1.length !== arr2.length || arr1[i] !== arr2[i]) {
      console.log("😔😔😔Arrays " + arr1 + " and " + arr2 + " are not equal!");
      return;
    }
  }

  console.log("😊😊😊Arrays are equal!");
};

//array to map
const words = ["ground", "control", "to", "major", "tom"];

//callback
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(assertArraysEqual(results1, words));