import getRandom from '../utils';
import core from '..';

const descriptionTask = () => 'What number is missing in the progression?\n';

const getTask = () => {
  const firstNum = getRandom(1, 10);
  const diff = getRandom(1, 7);
  const elementNumber = getRandom(1, 10);

  let element = firstNum;
  const arr = [element];
  while (arr.length < 10) {
    element += diff;
    arr.push(String(element));
  }

  const result = String(arr[elementNumber - 1]);
  arr[elementNumber - 1] = ' .. ';
  const question = arr.join(' ');

  return { question, result };
};

const findNum = () => {
  core(getTask, descriptionTask);
};

export default findNum;
