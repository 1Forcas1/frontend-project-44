import basisOfGame from '../index.js';

const even = () => {
  const taskDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

  const evenTask = () => {
    const number = Math.ceil(Math.random() * 100);

    let result;
    if (number % 2 === 0) {
      result = 'yes';
    } else {
      result = 'no';
    }

    return [number, result];
  };

  basisOfGame(taskDescription, evenTask);
};

export default even;
