/*
Write a function called "getLargestNumberAmongMixedElements". 

Given any array, "getLargestNumberAmongMixedElements" returns the largest number in the given array.

Notes:
* The array might contain values of a type other than numbers.
* If the array is empty, it should return 0.
* If the array contains no numbers, it should return 0.

var output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
*/

function getLargestNumberAmongMixedElements(arr) {
  let largest = 0;
  if (arr.length > 0) {
    let numbers = arr.filter(el => typeof el === 'number');
    if (numbers.length > 0) {
      largest = numbers[0];
      numbers.forEach(el => {
        if (el > largest) {
          largest = el;
        }
      });
    }
  }
  return largest;
}
