const assert = require("assert");

const capitalizeFirstLetters = (input) => {
  if (input.length > 0) {
    return input
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");
  } else {
    return "";
  }
};

// Check that capitalizeFirst is a function
assert.strictEqual(typeof capitalizeFirstLetters, "function");

// Check that capitalizeFirst accepts one argument
assert.strictEqual(capitalizeFirstLetters.length, 1);

// Check that capitalizeFirst transforms javaScript correctly
assert.strictEqual(capitalizeFirstLetters("javaScript"), "JavaScript");

// Check that it works for a 1-character string
assert.strictEqual(
  capitalizeFirstLetters("i love javascript"),
  "I Love Javascript"
);

// Check that it works for an empty string
assert.strictEqual(capitalizeFirstLetters(""), "");
