/*
Write a function called "findShortestWordAmongMixedElements".

Given an array, "findShortestWordAmongMixedElements" returns the shortest string within the given array.

Notes:
* If there are ties, it should return the first element to appear in the given array.
* Expect the given array to have values other than strings.
* If the given array is empty, it should return an empty string.
* If the given array contains no strings, it should return an empty string.

var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'
*/

function findShortestWordAmongMixedElements(arr) {
  let shortest = '';
  if (arr.length > 0) {
    let strings = arr.filter(el => typeof el === 'string');
    if (strings.length > 0) {
      shortest = strings[0];
      strings.forEach(el => {
        if (el.length < shortest.length) {
          shortest = el;
        }
      });
    }
  }
  return shortest;
}
