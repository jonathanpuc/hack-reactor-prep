/*
Write a function called "findShortestOfOfThreeWords".

Given 3 strings, "findShortestOfOfThreeWords" returns the shortest of the given strings.

Notes:
* If there are ties, it should return the first word in the parameters list.

var output = findShortestOfOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'
*/

function findShortestOfOfThreeWords(word1, word2, word3) {
  let shortest = arguments[0];
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i].length < shortest.length) {
      shortest = arguments[i];
    }
  }
  return shortest;
}
