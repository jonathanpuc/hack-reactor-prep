/*Write a function called "listAllValues" which returns an array of all the input object's values.

Example input:
{
  name : 'Krysten',
  age : 33,
  hasPets : false
}

Function's return value (output):
['Krysten', 33, false]
*/

function listAllValues(obj) {
  const valuesArray = [];

  for (let prop in obj) {
    valuesArray.push(obj[prop]);
  }

  return valuesArray;
}

var testObj = { flavor: "Vanilla", size: 12, vegan: true };

listAllValues(testObj); // Returns ['Vanilla', 12, true]
