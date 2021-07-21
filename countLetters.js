const countLetters = function(word) {
  const str = word.toLowerCase().replace(/\s/g, "");

  const letterCount = {};
  // console.log(str);

  for (let i = 0; i < str.length; i++) {
    // console.log(str[i])
    if (str[i] in letterCount) {
      letterCount[str[i]] += 1;
    } else {
      letterCount[str[i]] = 1
    }
  }
  return letterCount;
}

console.log(countLetters("Lighthouse in the house"));


