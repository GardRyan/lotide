// Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.

const assertArraysEqual = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1.length !== arr2.length) {
      
      console.log("😔😔😔Arrays " + arr1 + " and " + arr2 + " are equal!");
      //return false;
    } else if (arr1[i] !== arr2[i]) {
      console.log("😔😔😔Arrays " + arr1 + " and " + arr2 + " are equal!");
      //return false;
    }
  }

  
  console.log("❤️❤️❤️Arrays " + arr1 + " and " + arr2 + " are equal!");
  //return true;
};


assertArraysEqual([1,2,3], [1,2,3]);
