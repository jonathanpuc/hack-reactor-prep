/*Write a function 'fromListToObject' which takes in an array of arrays, 
and returns an object with each pair of elements in the array as a key-value pair.

Example input:
[['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]

Function's return value (output):
{
  make : 'Ford'
  model : 'Mustang',
  year : 1964
}

Do not change the input string. Assume that all elements in the array will be of type 'string'.*/

function fromListToObject(array) {
  const object = {};

  array.forEach(arrayEl => {
    object[arrayEl[0]] = arrayEl[1];
  });
  return object;
}

var testArr = [["breed", "Maltese"], ["color", "Butterscotch"], ["age", 5]];

fromListToObject(testArr); // Returns { breed: 'Maltese', color: 'Butterscotch', age: 5}
