import getRandom from '../utils';
import core from '..';

const descriptionTask = () => 'What number is missing in the progression?\n';
const firstNum = getRandom(1, 10);
const diff = getRandom(1, 7);

const randomSequenceOfNumbers = () => {
  const arr = [`${firstNum}`];
  let result = firstNum;
  while (arr.length < 10) {
    result += diff;
    arr.push(` ${result}`);
  }
  arr.splice(getRandom(0, arr.length - 1), 1, ' .. ');
  return arr;
};

const getTask = () => `${randomSequenceOfNumbers()}`;

console.log(randomSequenceOfNumbers().length);

const getResult = () => String(firstNum + diff * ((randomSequenceOfNumbers().length) - 1));

const findNum = () => {
  core(getTask, getResult, descriptionTask);
};

export default findNum;
