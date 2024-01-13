//eqObjects Function

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
  
//assertObjectsEqual 

const assertObjectsEqual = function (object1, object2) {
  const inspect = require('util').inspect; // <= add this line

  if (eqObjects(object1, object2)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(object1)} !== ${inspect(object2)}`)
  }else {
  
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(object1)} === ${inspect(object2)}`)
}
}


// test
const obj1 = { a: 10, b: 16, c: 32, d: 65 };
const obj2 = { b: 2, a: 1 };
const obj3 = {a: 2, b: 1 }
const obj4 = {a: 2, b: 1 }
assertObjectsEqual(obj3, obj4);
assertObjectsEqual(obj1, obj3);
assertObjectsEqual(obj2, obj4);
assertObjectsEqual(obj1, obj2);