const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`❤️❤️❤️Assertion Passed: ${actual} = ${expected}`);
  }else {
    console.log(`😔😔😔Assertion Failed: ${actual} !== ${expected}`);
  }
  
  }

const countLetters = function(input) {
  const count = {};

  for (let element of input) {
    const key = String(element);

    if (count[key]) {
      count[key] += 1;
    }else {
    count[key] = 1;
    }

  }
  console.log(count);
}

  //output expected 

  countLetters('LHL');
  // L appears twice, and H once