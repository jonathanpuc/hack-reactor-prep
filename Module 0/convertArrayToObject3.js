/*
Write a function called "transformEmployeeData" that transforms some employee data from one format to another.

The argument will look something like this:
[
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
]

Given that input, the return value should look like this:
[
    {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
    {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
]

Note that the input may have a different number of rows or different keys than the given sample. 
*/

function transformEmployeeData(array) {
  const objectArray = [];

  array.forEach(outerArr => {
    let obj = {};
    outerArr.forEach(innerArr => {
      obj[innerArr[0]] = innerArr[1];
    });
    objectArray.push(obj);
  });
  return objectArray;
}

var demoArr = [
  [
    ["firstName", "Ware"],
    ["lastName", "Bunga"],
    ["age", 124],
    ["planet", "Xelon"]
  ],
  [
    ["firstName", "Saza"],
    ["lastName", "Poh"],
    ["age", 1241],
    ["planet", "Farq"]
  ]
];

transformEmployeeData(demoArr);
/* Returns :
[
    {firstName: 'Ware', lastName: 'Bunga', age: 124, planet: 'Xelon'},
    {firstName: 'Saza', lastName: 'Poh', age: 1241, planet: 'Farq'}
]
*/
