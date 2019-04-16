import getRandom from '../utils';
import core from '..';

const descriptionTask = 'Find the greatest common divisor of given numbers.';

const findGcd = (x, y) => {
  if (y > x) return findGcd(y, x);
  if (!y) return x;
  return findGcd(y, x % y);
};

const getTask = () => {
  const num1 = getRandom(1, 100);
  const num2 = getRandom(1, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(findGcd(num1, num2));
  return { question, correctAnswer };
};

export default () => {
  core(getTask, descriptionTask);
};
