/*
Write  a function called "convertObjectToList" which converts an object literal into an array of arrays, like this:
Argument:
{
  name: 'Holly',
  age: 35,
  role: 'producer'
}
Return value:
[['name', 'Holly'], ['age', 35], ['role', 'producer']]
*/

function convertObjectToList(obj) {
  var arrOfArrays = [];

  for (let prop in obj) {
    let innerArr = [];
    innerArr.push(prop);
    innerArr.push(obj[prop]);
    arrOfArrays.push(innerArr);
  }
  return arrOfArrays;
}

var demoObj = { class: "Warrior", weapon: "Sword", dead: false, age: 22 };

convertObjectToList(demoObj);
// Returns [['class', 'Warrior'], ['weapon', 'Sword'], ['dead', false], ['age' 22]]
