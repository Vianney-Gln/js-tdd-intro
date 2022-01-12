const assert = require("assert");

// WRITE THE ACTUAL FUNCTION HERE

const capitalizeFirst = (input) => {
  let output = "";
  if (input.length > 0) output += input[0].toUpperCase() + input.slice(1);
  return output;
};

// Check that capitalizeFirst is a function
assert.strictEqual(typeof capitalizeFirst, "function");

// Check that capitalizeFirst accepts one argument
assert.strictEqual(capitalizeFirst.length, 1);

// Check that capitalizeFirst transforms javaScript correctly
assert.strictEqual(capitalizeFirst("javaScript"), "JavaScript");

// Check that it works for a 1-character string
assert.strictEqual(capitalizeFirst("z"), "Z");

// Check that it works for an empty string
assert.strictEqual(capitalizeFirst(""), "");
