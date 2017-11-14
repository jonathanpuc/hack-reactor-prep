/*
Write a function called "findMinLengthOfThreeWords".

Given 3 words, "findMinLengthOfThreeWords" returns the length of the shortest word.

var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1
*/

function findMinLengthOfThreeWords(word1, word2, word3) {
  let args = [];
  var argLengths = [];
  var min;
  // turn arguments into true array object
  args = Array.from(arguments);
  // map out word lengths into an array
  argLengths = args.map(word => {
    return word.length;
  });
  // reduce lengths array into single number containing min num
  min = argLengths.reduce(function(a, b) {
    return Math.min(a, b);
  });

  return min;
}
