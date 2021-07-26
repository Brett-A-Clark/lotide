const eqArrays = require('./eqArrays.js');
const assertArraysEquals = require('./assertArraysEquals.js');

const middle = function(array) {
  let midArray = [];
  if (array.length <= 2) {
    midArray = [];
  } else if (array.length % 2 === 1) {
    midArray.push(array[(array.length - 1) / 2])
  } else {
    midArray.push(array[(array.length) / 2 - 1], array[(array.length) / 2])
  }
  return midArray;
};  

module.exports = middle;

