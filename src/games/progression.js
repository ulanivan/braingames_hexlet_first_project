import getRandom from '../utils';
import core from '..';

const descriptionTask = 'What number is missing in the progression?\n';
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

//const serialNum = firstNum + diff * hide;

const findNum = () => {
  const result = 10;
  const question = `Question: ${randomSequenceOfNumbers()}\n`;
  core(question, String(result), descriptionTask);
};

export default findNum;
