import getRandom from '../utils';
import core from '..';

const descriptionTask = 'What number is missing in the progression?\n';
const progressionLength = 10;


const getTask = () => {
  const firstNum = getRandom(1, 10);
  const diff = getRandom(1, 7);
  const elementNumber = getRandom(1, progressionLength);

  let element = firstNum;
  const progression = [];
  while (progression.length < progressionLength) {
    element += diff;
    progression.push(element);
  }
  const result = progression[elementNumber - 1];
  progression[elementNumber - 1] = ' .. ';
  const question = progression.join(' ');

  return { question, result };
};

const findNum = () => {
  core(getTask, descriptionTask);
};

export default findNum;
