// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

// const assertEqual = require('./assertEqual');

const eqArrays = function(array1, array2) {
  let result = "";
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      result = true;
    } else {
      result = false;
    }
  }
  console.log(result);
  return result;
};

const assertEqual = function(actual, expected) {
  const fact1 = actual;
  const fact2 = expected;
  if (actual === expected) {
    console.log(`Assertion Passed: ${fact1} === ${fact2}`);
  } else {
    console.log(`Assertion Failed: ${fact1} !== ${fact2}`);
  }
}

const eqObjects = function(object1, object2) {
const listOfKeyOne = Object.keys(object1); // ["a", "b"]
const listOfKeyTwo = Object.keys(object2); // ["a", "b", "c"]

// console.log("list1", listOfKeyOne);
// console.log("list2", listOfKeyTwo);

  if (listOfKeyOne.length !== listOfKeyTwo.length) {
    return false;
  }
  for (let key of listOfKeyOne) {
    const valueOne = object1[key];
    const valueTwo = object2[key];
    
    if (Array.isArray(valueOne) || Array.isArray(valueTwo)) {
      if (!eqArrays(valueOne, valueTwo)) {
        return false;
      } 
    } else {  
      if (valueOne !== valueTwo) {
        return false;
      }
    }
  }
  return true;
};

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true) // => true

// const abc = { a: "1", b: "2", c: "3" };
// eqObjects(ab, abc); // => false

// assertEqual(eqObjects(ab, abc), false) // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { c: "1", d: ["2", 3] };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertEqual(eqObjects(cd, dc), true) // => false

assertEqual(eqObjects(cd2, cd), false) // => false

