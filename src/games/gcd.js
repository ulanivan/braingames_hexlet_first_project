import readlineSync from 'readline-sync';
import {
  getRandom,
} from '..';
import core from '../core';

const findGcd = (x, y) => {
  if (y > x) return findGcd(y, x);
  if (!y) return x;
  return findGcd(y, x % y);
};

const gcd = () => {
  const descriptionTask = 'Find the greatest common divisor of given numbers.\n';
  const num1 = getRandom(1, 50);
  const num2 = getRandom(1, 50);
  const answer = readlineSync.question(`Question: ${num1} ${num2}\n`);
  const result = findGcd(num1, num2);
  const correct = result === Number(answer);
  const notCorrect = result !== Number(answer);
  core(correct, notCorrect, result, descriptionTask);
};

export default gcd;
