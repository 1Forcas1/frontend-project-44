import basisOfGame from '../index.js';

const prime = () => {
  const taskDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const primeTask = () => {
    const number = Math.floor(Math.random() * 101);

    const question = `Question: ${number}`;

    let result;
    if (number === 1) {
      result = 'no';
    } else if (number === 2) {
      result = 'yes';
    }

    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        result = 'no';
        break;
      } else {
        result = 'yes';
      }
    }

    return [question, result];
  };

  basisOfGame(taskDescription, primeTask);
};

export default prime;
