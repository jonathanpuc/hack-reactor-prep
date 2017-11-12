/*
Write a function called "getAllKeys" which returns an array of all the input object's keys.
Example input:
{
  name : 'Sam',
  age : 25,
  hasPets : true
}
Function's return value (output) :
['name', 'age', 'hasPets']
Do not use "Object.keys" to solve this prompt.
Note that your function should be able to handle any object passed in it.
*/

function getAllKeys(obj) {
  const keys = [];

  for (key in obj) {
    keys.push(key);
  }

  return keys;
}

var demoObj = { artist: "Chance the Rapper", grammys: 3, active: true };

getAllKeys(demoObj); // Returns ['artist', 'grammys', 'active']
