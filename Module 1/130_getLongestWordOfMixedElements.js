/*
Write a function called "getLongestWordOfMixedElements".

Given an array of mixed types, "getLongestWordOfMixedElements" returns the longest string in the given array.

Notes:
* If the array is empty, it should return an empty string (""). 
* If the array contains no strings; it should return an empty string.

var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'
*/

function getLongestWordOfMixedElements(arr) {
  let longest = '';
  if (arr.length > 0) {
    let strings = arr.filter(el => typeof el === 'string');
    if (strings.length > 0) {
      longest = strings[0];
      strings.forEach(el => {
        if (el.length > longest.length) {
          longest = el;
        }
      });
    }
  }
  return longest;
}
