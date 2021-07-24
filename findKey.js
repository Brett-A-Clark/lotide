const assertEqual = function(actual, expected) {
  const fact1 = actual;
  const fact2 = expected;
  if (actual === expected) {
    console.log(`Assertion Passed: ${fact1} === ${fact2}`);
  } else {
    console.log(`Assertion Failed: ${fact1} !== ${fact2}`);
  }
};

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

module.export = assertEqual;

const findKey = function (name, num) {
  for (let key in name) {
    if(num(name[key])) {
      return key;
    }
  }
}

x = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

console.log(x);