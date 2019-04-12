import readlineSync from 'readline-sync';
import {
  cons, car, cdr,
} from 'hexlet-pairs';

export const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const randomNumbers = cons(getRandom(1, 100), getRandom(1, 100));
export const num1 = car(randomNumbers);
export const num2 = cdr(randomNumbers);
export const descriptionTask = ('What is the result of the expression?\n');
const str = '+-*';
const getRandomSymbol = () => str.charAt(getRandom(0, str.length - 1));
const symbol = getRandomSymbol();
export const randomExpression = `Question: ${num1} ${symbol} ${num2}`;
export const answerRandom = readlineSync.question(`${randomExpression}\n`);
export let result = 0;
export const correct = () => result === Number(answerRandom);
export const notCorrect = () => result !== Number(answerRandom);
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
