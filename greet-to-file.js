import { writeFile } from 'fs';
// create var, set it to a funcion, which will be callable.
const writeGreetingToFile = (name) => {
  writeFile('greeting.txt', `Hello, ${name}`,(err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  })

}

// call it
writeGreetingToFile("Daniel");

// import { writeFile } from 'fs';
// import { Buffer } from 'buffer';

// const data = new Uint8Array(Buffer.from('Hello Node.js'));
// writeFile('message.txt', data, (err) => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// });