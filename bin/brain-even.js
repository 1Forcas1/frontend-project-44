#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let i = 0; i < 3; i += 1) {
  const number = Math.ceil(Math.random() * 100);
  console.log(`Question: ${number}`);
  const userResponse = readlineSync.question('Your answer: ');

  if ((number % 2 === 0 && userResponse === 'yes') || (number % 2 !== 0 && userResponse === 'no')) {
    console.log('Correct!');
  } else if (number % 2 === 0 && userResponse !== 'yes') {
    console.log(`'${userResponse}' is wrong answer ;(. Correct answer was 'yes'.`);
    console.log(`Let's try again, ${name}`);
    break;
  } else {
    console.log(`'${userResponse}' is wrong answer ;(. Correct answer was 'no'.`);
    console.log(`Let's try again, ${name}`);
    break;
  }

  if (i === 2) {
    console.log(`Congratulations, ${name}`);
  }
}
