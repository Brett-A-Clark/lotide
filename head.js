const assertEqual = function(actual, expected) {
  const fact1 = actual;
  const fact2 = expected;
  if (actual === expected) {
    console.log(`Assertion Passed: ${fact1} === ${fact2}`);
  } else {
    console.log(`Assertion Failed: ${fact1} !== ${fact2}`);
  }
};

const head = function(leg) {
  return leg[0];
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");