/*
Write a function called "getLengthOfShortestElement".

Given an array, "getLengthOfShortestElement" returns the length of the shortest string in the given array.

Notes:
* It should return 0 if the array is empty.

var output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3
*/

function getLengthOfShortestElement(arr) {
  let shortestLength = 0;
  if (arr.length > 1) {
    shortestLength = arr.map(el => el.length).reduce((a, b) => Math.min(a, b));
  }
  return shortestLength;
}
