import getRandom from '../utils';
import core from '..';

const descriptionTask = 'What number is missing in the progression?\n';
const progressionLength = 10;


const getTask = () => {
  const firstNum = getRandom(1, 10);
  const diff = getRandom(1, 7);
  const elementNumber = getRandom(1, progressionLength - 1);

  const question = Array(progressionLength)
    .fill('..')
    .map((item, i) => (elementNumber === i ? '..' : firstNum + diff * i))
    .join(' ');
  const result = firstNum + diff * elementNumber;

  return { question, result };
};

const findNum = () => {
  core(getTask, descriptionTask);
};

export default findNum;
