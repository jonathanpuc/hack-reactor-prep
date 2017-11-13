/*
Write a function called "countWords".

Given a string, "countWords" returns an object where each key is a word in the given string, with its value being how many times that word appeared in th given  string. 

Notes:
* If given an empty string, it should return an empty object.

var output = countWords('ask a bunch get a bunch'); 
console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}
*/

function countWords(str) {
  var object = {};
  if (str) {
    str = str.split(' ');
    // iterate over each word
    str.forEach(function(word) {
      // increment value of count for each word in object
      // if already exists add + 1 or it'll be set to 0 and incremented by 1
      object[word] = (object[word] || 0) + 1;
    });
  } else {
    return {};
  }
  return object;
}
