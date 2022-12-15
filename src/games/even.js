import runBasisOfGameAndGameGeneration from '../index.js';
import { getRandomNumber } from '../utils.js';

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

const isEven = (number) => (number % 2 === 0);

const recognizeEvenNumber = () => {
  const taskDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

  const evenTask = () => {
    const number = getRandomNumber(MIN_NUMBER, MAX_NUMBER);

    const result = isEven(number) ? 'yes' : 'no';
    return [number, result];
  };

  runBasisOfGameAndGameGeneration(taskDescription, evenTask);
};

export default recognizeEvenNumber;