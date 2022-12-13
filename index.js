function divisibleBy(num, x) {
  return num % x === 0;
}

// function fizzBuzz(number) {
//   if (divisibleBy(number, 3) && divisibleBy(number, 5)) return "fizzbuzz";
//   if (divisibleBy(number, 3)) return "fizz";
//   if (divisibleBy(number, 5)) return "buzz";
//   return number;
// }

function fizzBuzz(number) {
  let result = "";
  if (number % 3 === 0) result += "fizz";
  if (number % 5 === 0) result += "buzz";
  return result !== "" ? result : number;
}

module.exports = { fizzBuzz, divisibleBy };
