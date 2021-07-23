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

// assertArraysEquals([1, 2, 3], [1, 2, 3]) // => true
// assertArraysEquals([1, 2, 3], [3, 2, 1]) // => false

// assertArraysEquals(["1", "2", "3"], ["1", "2", "3"]) // => true
// assertArraysEquals(["1", "2", "3"], ["1", "2", 3]) // => false



const takeUntil = function(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return array.slice(0, i)
    } 
  }
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0); 
  

console.log(results1);


console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ','); 
console.log(results2);



// Expected Output
// [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]