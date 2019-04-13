import core from '../core';
import getRandom from '..';

const findGcd = (x, y) => {
  if (y > x) return findGcd(y, x);
  if (!y) return x;
  return findGcd(y, x % y);
};

const descriptionTask = 'Find the greatest common divisor of given numbers.\n';
const num1 = getRandom(1, 100);
const num2 = getRandom(1, 100);

const playGcd = () => {
  const question = `Question: ${num1} ${num2}\n`;
  const result = findGcd(num1, num2);
  core(question, String(result), descriptionTask);
};

export default playGcd;
