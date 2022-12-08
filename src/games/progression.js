import basisOfGame from '../index.js';

const progression = () => {
  const taskDescription = 'What number is missing in the progression?';

  const progressionTask = () => {
    const lengthArray = Math.ceil(Math.random() * (10 - 5) + 5);
    let elementArray = Math.ceil(Math.random() * 20);
    const progressionDifference = Math.ceil(Math.random() * (10 - 1) + 1);

    const array = [];
    array.push(elementArray);

    while (array.length < lengthArray) {
      elementArray += progressionDifference;
      array.push(elementArray);
    }

    const positionOfHiddenElement = Math.floor(Math.random() * array.length);
    const result = String(array[positionOfHiddenElement]);
    array[positionOfHiddenElement] = '..';
    const question = `Question: ${array.join(' ')}`;

    return [question, result];
  };

  basisOfGame(taskDescription, progressionTask);
};

export default progression;
