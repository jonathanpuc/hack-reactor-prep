/*
Write a function called "findShortestElement".

Given an array, "findShortestElement" returns the shortest string within the given array.

Notes:
* If there are ties, it should return the first element to appear.
* If the given array is empty, it should return an empty string.

var output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'
*/

function findShortestElement(arr) {
  let shortest;
  if (arr.length > 0) {
    shortest = arr[0];
    arr.forEach(el => {
      if (el.length < shortest.length) {
        shortest = el;
      }
    });
  }
  return shortest;
}
