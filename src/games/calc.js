import getRandom from '../utils';
import core from '..';

const descriptionTask = 'What is the result of the expression?\n';
const sings = '+-*';
const num1 = getRandom(1, 50);
const num2 = getRandom(1, 50);

const calc = () => {
  const getRandomSymbol = () => sings.charAt(getRandom(0, sings.length - 1));
  const char = getRandomSymbol();
  const question = `${num1} ${char} ${num2}`;
  let result = 0;
  switch (char) {
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
      result = '+';
  }
  core(question, String(result), descriptionTask);
};

export default calc;
