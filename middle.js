// find the middle of the array
// return those results
//






  // TEST/ASSERTION FUNCTIONS
  function eqArrays(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1.length !== arr2.length) {
        return false;
        //console.log("Array's are different lengths!")
      }else if (arr1[i] !== arr2[i]) {
        //console.log("Arrays are not the same");
        return false;
      }
    }
  
    //console.log("Arrays are the same");
    return true;
  }
  

const assertArraysEqual = function (arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1.length !== arr2.length) {
      console.log("😔😔😔Arrays " + arr1 + " and " + arr2 + " are not equal!")
      return;
    }else if (arr1[i] !== arr2[i]) {
      console.log("😔😔😔Arrays " + arr1 + " and " + arr2 + " are not equal!")
      return;
    }
  }

  
  console.log("❤️❤️❤️Arrays " + arr1 + " and " + arr2 + " are equal!")
  //return true;
}


// ACTUAL FUNCTION


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