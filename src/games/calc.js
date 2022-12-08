import basisOfGame from '../index.js';

const calculator = () => {
  const taskDescription = 'What is the result of the expression?';

  const calcTask = () => {
    const firstNumber = Math.ceil(Math.random() * 25);
    const secondNumber = Math.ceil(Math.random() * 10);

    const operations = ['+', '-', '*'];
    const operationSelection = Math.floor(Math.random() * operations.length);
    const operation = operations[operationSelection];

    const question = `${firstNumber} ${operation} ${secondNumber}`;

    let result;
    if (operation === '+') {
      result = firstNumber + secondNumber;
    } else if (operation === '-') {
      result = firstNumber - secondNumber;
    } else {
      result = firstNumber * secondNumber;
    }

    return [question, String(result)];
  };

  basisOfGame(taskDescription, calcTask);
};

export default calculator;
