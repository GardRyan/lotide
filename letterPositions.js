// assertArraysEqual function
const assertArraysEqual = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1.length !== arr2.length || arr1[i] !== arr2[i]) {
      console.log("😔😔😔Arrays " + arr1 + " and " + arr2 + " are not equal!");
      return;
    }
  }

  console.log("😊😊😊Arrays are equal!");
};

// eqArrays function
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

//letterPositions Function
const letterPositions = function(sentence) {
  const results = {};

  // logic to update results here

  //need a for loop to loop through the data and identify the letters and their index

  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];

    // we do not want to count spaces
    if (letter !== ' ') {
      if (!results[letter]) {

        //return not a letter
        results[letter] = [];
      }
      //push results into new array for letter, with the index
      results[letter].push(i);
    }
 
  
  }
  //console.log results to see in terminal
  console.log(results);
  //return to use with other functions
  return results;
};


letterPositions("hello");
assertArraysEqual(letterPositions("hello").e, [1]);