/*
Write a function called "getLengthOfLongestElement".

Given an array, "getLengthOfLongestElement" returns the length of the longest string in the given array.

Notes:
* It should return 0 if the array is empty.

var output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5
*/

function getLengthOfLongestElement(arr) {
  let longestLength = 0;
  if (arr.length > 0) {
    longestLength = arr
      .map(word => {
        return word.length;
      })
      .reduce((a, b) => Math.max(a, b));
  }
  return longestLength;
}
