import { writeFile } from 'fs';
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'process';


// create var, set it to a funcion, which will be callable.
const writeGreetingToFile = (name) => {
  writeFile('greeting.txt', `Hello, ${name}`,(err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  })

}

const rl = readline.createInterface({ input, output });
const answer = await rl.question('What is your name? ');

writeFile('greeting.txt', `Hello, ${answer}`,(err) => {
  if (err) throw err;
  console.log(`Thank you for your name, ${answer}. The file has been saved at greeting.txt!`);
})

rl.close();



// call it
//writeGreetingToFile("Daniel");
