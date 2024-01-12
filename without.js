//Implement without which will return a subset of a given array, removing unwanted elements.

// This function should take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.

let resultArr = []

    function without(arr1, arr2) {
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
          resultArr.push(arr2[i]);
        }
      }
      console.log(resultArr);
    }

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];


// without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function// assertArraysEqual(words, ["hello", "world", "lighthouse"]);
