const assertArrays = function(array1, array2) {
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

  const assertArraysEquals = function(array1, array2) {
  let correctResult = `Assertion Passed: ${array1} === ${array2}`;
  let incorrectResult = `Assertion Failed: ${array1} !== ${array2}`;

  let test = eqArrays(array1, array2);
  if (test = true) {
    console.log(correctResult);
  } else {
    console.log(incorrectResult);
  }
};

assertArraysEquals([1, 2, 3], [1, 2, 3]) // => true
assertArraysEquals([1, 2, 3], [3, 2, 1]) // => false

assertArraysEquals(["1", "2", "3"], ["1", "2", "3"]) // => true
assertArraysEquals(["1", "2", "3"], ["1", "2", 3]) // => false