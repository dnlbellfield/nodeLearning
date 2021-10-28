// write function
// function add(a,b) {
//   return a + b;
// }

// function sub(a,b) {
//   return a - b;
// }

// // run function
// // log from console 
// console.log(add(5,5)); 

// // module.exports tells node the things you want to export out of the module.
// // module.exports = add;

// // export multiple items in an object {} 
// module.exports = { add, sub}

// // or

// module.exports.add = add;
// module.exports.sub = sub;

// // or
// exports.add = add;
// exports.sub = sub;

exports.add = (a,b) => a + b;