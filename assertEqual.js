const assertEqual = function(actual, expected) {

  if (actual === Number(actual) && expected === Number(expected)) {
    return actual + expected;

  } else if (actual === "" && expected === "") {
    return actual + expected;

  } else (actual !== Number(actual) || expected !== Number(expected));
  console.log("Error: Function has a string and a number. They must be the same type in order to process.");
};



//test code

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1,1);

// we want to code to be two of the same objects
//two strings
//two numbers

//if yes, return result. If no, return error message.