import getRandom from '../utils';
import core from '..';

const descriptionTask = () => 'What is the result of the expression?\n';
const sings = '+-*';

const getRandomSymbol = () => sings.charAt(getRandom(0, sings.length - 1));
const getTask = () => `${getRandom(1, 100)} ${getRandomSymbol()} ${getRandom(1, 100)}`;

const getResult = (question) => {
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
  return String(result);
};

const calc = () => {
  core(getTask, getResult, descriptionTask);
};

export default calc;
