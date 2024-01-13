// assertArraysEqual

const assertArraysEqual = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1.length !== arr2.length || arr1[i] !== arr2[i]) {
      console.log("😔😔😔Arrays " + arr1 + " and " + arr2 + " are not equal!");
      return;
    }
  }

  console.log("😊😊😊Arrays are equal!");
};

// eqArray

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

//The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.

const takeUntil = function(array, callback) {
  const results = [];

  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])) {
      results.push(array[i]);
    } else {
      break;
    }
  }

  return results;
};


//expected output
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];   //[ 1, 2, 5, 7, 2 ]
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(results1, [1,2,5,7,2]);

console.log('---'); // --

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"]; // [ 'I\'ve', 'been', 'to', 'Hollywood' ]
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);

