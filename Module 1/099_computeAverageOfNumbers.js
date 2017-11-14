/*
Write a function called "computeAverageOfNumbers".

Given an array of numbers, "computeAverageOfNumbers" returns their average. 

Notes:
* If given an empty array, it should return 0.

var input = [1,2,3,4,5];
var output = computeAverageOfNumbers(input);
console.log(output); // --> 3
*/

function computeAverageOfNumbers(nums) {
  let result = 0;
  if (nums.length !== 0) {
    result = nums.reduce((acc, curr) => acc + curr);
    return result / nums.length;
  }
  return result;
}
