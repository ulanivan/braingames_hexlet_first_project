import getRandom from '../utils';
import core from '..';

const descriptionTask = () => 'What is the result of the expression?\n';
const sings = '+-*';
const getRandomSymbol = () => sings.charAt(getRandom(0, sings.length - 1));

const getTask = () => {
  const operationSymb = getRandomSymbol();
  const num1 = getRandom(1, 100);
  const num2 = getRandom(1, 100);
  const question = `${num1} ${operationSymb} ${num2}`;
  let result;
  switch (operationSymb) {
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
  return { question, result };
};

const calc = () => {
  core(getTask, descriptionTask);
};

export default calc;
