const { fizzBuzz, divisibleBy } = require("./index.js");

test("fizzBuzz is a function", () => {
  expect(fizzBuzz).toBeInstanceOf(Function);
});

test("returns a number", () => {
  const result = fizzBuzz(2);
  expect(typeof result).toBe("number");
});

test("returns the passed number", () => {
  expect(fizzBuzz(2)).toBe(2);
  expect(fizzBuzz(7)).toBe(7);
});

test("returns 'fizz' if number is divisible by 3", () => {
  expect(fizzBuzz(3)).toBe("fizz");
  expect(fizzBuzz(6)).toBe("fizz");
});

test("returns 'buzz' if number is divisible by 5", () => {
  expect(fizzBuzz(5)).toBe("buzz");
  expect(fizzBuzz(10)).toBe("buzz");
});

test("returns 'fizzbuzz' if number is divisible by 3 and 5", () => {
  expect(fizzBuzz(15)).toBe("fizzbuzz");
  expect(fizzBuzz(30)).toBe("fizzbuzz");
});

test("divisibleBy is a function", () => {
  expect(divisibleBy).toBeInstanceOf(Function);
});

test("returns a boolean", () => {
  expect(typeof divisibleBy()).toBe("boolean");
});

test("returns true if number is divisible by x", () => {
  expect(divisibleBy(12, 3)).toBe(true);
  expect(divisibleBy(20, 5)).toBe(true);
});
