/*
Write a function called "computeSquareRoot".
Given a number, "computeSquareRoot" returns its square root.
var output = computeSquareRoot(9);
console.log(output); // --> 3

Do not use Math.sqrt(); for this problem. Instead, use this iterative way of solving the problem:

https://www.deltacollege.edu/dept/basicmath/Babylonian.htm
*/

function computeSquareRoot(num) {
  var initialGuess = (num - 1) / 2;
  var nextGuess = initialGuess;

  for (let i = 0; i <= 3; i++) {
    nextGuess = nextGuess + num / nextGuess;
    nextGuess /= 2;
  }

  return Math.round(nextGuess);
}
