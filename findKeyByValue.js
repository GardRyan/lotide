//assertEqual Function

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`❤️❤️❤️Assertion Passed: ${actual} = ${expected}`);
  }else {
    console.log(`😔😔😔Assertion Failed: ${actual} !== ${expected}`);
  }
  
  }

const findKeyByValue = function(obj, val) {
  for(const key in obj) {
    if (obj[key] === val) {
      //console.log(key)
      return key;
    }
  }
return undefined;
  }



const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };

  //tests
  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);