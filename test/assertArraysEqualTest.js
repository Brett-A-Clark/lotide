const assertArraysEquals = require('../assertArraysEqual');

assertArraysEquals([1, 2, 3], [1, 2, 3]) // => true
assertArraysEquals([1, 2, 3], [3, 2, 1]) // => false

assertArraysEquals(["1", "2", "3"], ["1", "2", "3"]) // => true
assertArraysEquals(["1", "2", "3"], ["1", "2", 3]) // => false