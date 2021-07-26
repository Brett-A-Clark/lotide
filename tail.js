const assertEqual = require('./assertEqual.js');

// const assertEqual = function(actual, expected) {
//   const fact1 = actual;
//   const fact2 = expected;
//   if (actual === expected) {
//     console.log(`Assertion Passed: ${fact1} === ${fact2}`);
//   } else {
//     console.log(`Assertion Failed: ${fact1} !== ${fact2}`);
//   }
// };

// const head = function(leg) {
//   return leg[0];
// };


// Tail Function
const words = ["Yo Yo", "Lighthouse", "Labs"];

const tail = function(array1) {
  let tailArray = [];
  for (let i = 1; i < array1.length; i++) {
    tailArray.push(array1[i])
  }  
  console.log(tailArray);
  return tailArray;
};


// Test Case: Check the original array 
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

module.exports = tail;
module.exports = assertEqual;
