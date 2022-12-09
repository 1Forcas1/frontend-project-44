import readlineSync from 'readline-sync';

const basisOfGame = (taskDescription, task) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(taskDescription);

  for (let i = 0; i < 3; i += 1) {
    const questionAndResult = task();

    console.log(`Question: ${questionAndResult[0]}`);
    const userResponse = readlineSync.question('Your answer: ');

    if (userResponse === questionAndResult[1]) {
      console.log('Correct!');
    } else {
      console.log(`'${userResponse}' is wrong answer ;(. Correct answer was '${questionAndResult[1]}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }

    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default basisOfGame;
