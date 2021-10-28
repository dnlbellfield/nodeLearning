// // if only need one variable or function imported
// // import 'add' from add.js, set  VARIABLE-NAME to require('./add.js');
// var addFn = require('./add.js');
// var { add } = require('./add.js');
// var add = require('./add.js');


// if multiple things are being imported / exported
// for multiple imports set an object 'exportedObject' to require('./add.js');

// destructed notation { add }
var { add } = require('./add.js');
// var alias = require('./add.js');

// vs
// var exportedObject = require('./add.js');
// get the object, and parse the 'add' property 
// use case: console.log(exportedObject.add(1,2));

// Write functions 

function greet(name) {
  console.log("Hello there, " + name + "!");
}

// Run functions

// should return Hello there, Daniel!
greet("Daniel"); 

// Call the only import from the module
// console.log(addFn(10,20));

// needs require('./add.js'); 
// and module.exports = add; (in add.js)

// when you want to use something that was exported as an object.
// call it appropriately 
console.log(add(1,2));
// console.log(exportedObject.sub(10,2));
// console.log(alias.add(1,2));

