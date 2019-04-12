import readlineSync from 'readline-sync';
import core from '..';

export let result = 0;
const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const num1 = getRandom(1, 100);
const num2 = getRandom(1, 100);
const str = '+-*';
const getRandomSymbol = () => str.charAt(getRandom(0, str.length - 1));
const symbol = getRandomSymbol();
export const descriptionTask = ('What is the result of the expression?\n');
export const answer = readlineSync.question(`Question: ${num1} ${symbol} ${num2}\n`);
export const correct = () => result === Number(answer);
export const notCorrect = () => result !== Number(answer);

export const calc = () => {
  switch (symbol) {
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
  core();
};
