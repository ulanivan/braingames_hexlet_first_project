import getRandom from '../utils';
import core from '..';

const descriptionTask = 'What is the result of the expression?';
const sings = '+-*';
const getRandomSymbol = () => sings.charAt(getRandom(0, sings.length - 1));

const getTask = () => {
  const operationSymb = getRandomSymbol();
  const num1 = getRandom(1, 100);
  const num2 = getRandom(1, 100);
  const question = `${num1} ${operationSymb} ${num2}`;
  let correctAnswer;
  switch (operationSymb) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
    default:
      correctAnswer = 'null';
  }
  correctAnswer = String(correctAnswer);
  return { question, correctAnswer };
};

export default () => {
  core(getTask, descriptionTask);
};
