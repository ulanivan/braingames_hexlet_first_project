import getRandom from '../utils';
import core from '..';

const findGcd = (x, y) => {
  if (y > x) return findGcd(y, x);
  if (!y) return x;
  return findGcd(y, x % y);
};

const descriptionTask = () => 'Find the greatest common divisor of given numbers.\n';

const getTask = () => `${getRandom(1, 100)} ${getRandom(1, 100)}`;

const getResult = (question) => {
  const nums = question.split(' ');
  return String(findGcd(nums[0], nums[1]));
};

const playGcd = () => {
  core(getTask, getResult, descriptionTask);
};

export default playGcd;
