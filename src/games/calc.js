import getRandom from '../utils';
import core from '..';

const descriptionTask = () => 'What is the result of the expression?\n';
const sings = '+-*';
const getRandomSymbol = () => sings.charAt(getRandom(0, sings.length - 1));

const getTask = () => {
  const question = `${getRandom(1, 100)} ${getRandomSymbol()} ${getRandom(1, 100)}`;
  const nums = question.split(' ');
  const num1 = Number(nums[0]);
  const num2 = Number(nums[2]);
  const symb = nums[1];
  let result;
  switch (symb) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      result = '';
  }
  result = String(result);
  return { question, result };
};

const calc = () => {
  core(getTask, descriptionTask);
};

export default calc;
