const assertEqual = function(result, input) {
  if (result === input) {
    console.log(`❤️❤️❤️Assertion Passed: ${result} = ${input}`);
  }else {
    console.log(`😔😔😔Assertion Failed: ${result} !== ${input}`);
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
  return count;
}

  //output expected 

  countLetters('LHL');

  // L appears twice, and H once