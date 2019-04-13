import readlineSync from 'readline-sync';
import {
  getRandom,
} from '..';
import core from '../core';

const calc = () => {
  const descriptionTask = 'What is the result of the expression?\n';
  const characters = '+-*';
  const getRandomSymbol = () => characters.charAt(getRandom(0, characters.length - 1));
  const randomChar = getRandomSymbol();
  const num1 = getRandom(1, 50);
  const num2 = getRandom(1, 50);
  const answer = readlineSync.question(`Question: ${num1} ${randomChar} ${num2}\n`);
  let result = 0;
  switch (randomChar) {
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
      result = 0;
  }
  const correct = result === Number(answer);
  const notCorrect = result !== Number(answer);
  core(correct, notCorrect, answer, result, descriptionTask);
};

export default calc;
