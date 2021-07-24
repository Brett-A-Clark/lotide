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

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false



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

const without = function (source, itemsToRemove) {
  let newArr = [];
  if (itemsToRemove.length < source.length) {
    for (let i = 0; i < itemsToRemove.length; i++) {
      let element = itemsToRemove[i];
      for (let j = 0; j < source.length; j++) {
        if (element !== source[j]) {
          newArr.push(source[j]);
        }
      }
    }  
  }
  if (itemsToRemove.length >= source.length) {
    for (let i = 0; i < itemsToRemove.length; i++) {
      if (itemsToRemove[i] !== source[i]) {
        newArr.push(source[i]);
      }
    }
  }
  console.log(newArr);
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEquals(words, ["hello", "world", "lighthouse"]);