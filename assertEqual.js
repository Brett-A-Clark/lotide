const assertEqual = function(actual, expected) {
  const fact1 = actual;
  const fact2 = expected;
  if (actual === expected) {
    console.log(`Assertion Passed: ${fact1} === ${fact2}`);
  } else {
    console.log(`Assertion Failed: ${fact1} !== ${fact2}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);