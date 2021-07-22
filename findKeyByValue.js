// Search for a key on an object where its value matches a given value.
// Function will take in an object and a value, return the first key which contains the given value. If no key with that given value is found, return undefined.

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const findKeyByValue = function (bestTVShowsByGenre, show) {

  for (const key in bestTVShowsByGenre, show) {
    return bestTVShowsByGenre(key) ? obj[key] : undefined;
  }
};

console.log(Object.keys(bestTVShowsByGenre, "The Wire"), "drama");
console.log(Object.keys(bestTVShowsByGenre, "That '70s Show"), undefined);