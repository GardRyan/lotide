//assertEqual Function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`❤️❤️❤️Assertion Passed: ${actual} = ${expected}`);
  } else {
    console.log(`😔😔😔Assertion Failed: ${actual} !== ${expected}`);
  }
  
};

const eqObjects = function(object1, object2) {
// check to see if both objects have same number of keys
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    //console.log ('false');
    return false;
  }

  //check if the values of each key are the same

  for (const key in object1) {
    if (object1[key] !== object2[key]) {
  
      //console.log ('false');
      return false;
    }
  }
  //console.log('true');
  return true;
};


//tests

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);