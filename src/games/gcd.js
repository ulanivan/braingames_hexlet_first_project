import getRandom from '../utils';
import core from '..';

const findGcd = (x, y) => {
  if (y > x) return findGcd(y, x);
  if (!y) return x;
  return findGcd(y, x % y);
};

const descriptionTask = () => 'Find the greatest common divisor of given numbers.\n';

const getTask = () => {
  const question = `${getRandom(1, 100)} ${getRandom(1, 100)}`;
  const nums = question.split(' ');
  const result = String(findGcd(nums[0], nums[1]));
  return { question, result };
};

const playGcd = () => {
  core(getTask, descriptionTask);
};

export default playGcd;
