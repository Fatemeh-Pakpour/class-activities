
const string = "This is a sentence containing some very long strings";
const output = string.split(" ").reduce((substring, element) => {
  if (substring.length > element.length) {
    return substring;
  } else {
    return element;
  }
});
console.log(output);

// answer containing