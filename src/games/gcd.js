import basisOfGame from '../index.js';

const gcd = () => {
  const taskDescription = 'Find the greatest common divisor of given numbers.';

  const gcdTask = () => {
    let firstNumber = Math.ceil(Math.random() * 25);
    let secondNumber = Math.ceil(Math.random() * 25);

    const question = (`Question: ${firstNumber} ${secondNumber}`);

    while (firstNumber !== secondNumber) {
      if (firstNumber > secondNumber) {
        firstNumber -= secondNumber;
      } else {
        secondNumber -= firstNumber;
      }
    }

    const result = String(firstNumber);

    return [question, result];
  };

  basisOfGame(taskDescription, gcdTask);
};

export default gcd;
