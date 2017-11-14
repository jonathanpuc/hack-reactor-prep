/*
Write a function called "findMaxLengthOfThreeWords".

Given 3 words, "findMaxLengthOfThreeWords" returns the length of the longest word.

var output = findMaxLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 3
*/

function findMaxLengthOfThreeWords(word1, word2, word3) {
  let args = [];
  var argLengths = [];
  var max;
  // turn arguments into true array object
  args = Array.from(arguments);
  // map out word lengths into an array
  argLengths = args.map(word => {
    return word.length;
  });
  // reduce lengths array into single number containing min num
  max = argLengths.reduce(function(a, b) {
    return Math.max(a, b);
  });

  return max;
}
