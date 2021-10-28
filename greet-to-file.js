import { writeFile } from 'fs';

fs.writeFile('greeting.txt', "Hello World", err => console.log("Error occurred when writing the file.") )




// import { writeFile } from 'fs';
// import { Buffer } from 'buffer';

// const data = new Uint8Array(Buffer.from('Hello Node.js'));
// writeFile('message.txt', data, (err) => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// });