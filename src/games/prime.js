import getRandom from '../utils';
import core from '..';

const descriptionTask = () => 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = n => (((((2 * n + 1) % 2) === 0)));

const getTask = () => {
  const question = getRandom(1, 3572);
  const result = isPrime(question) ? 'yes' : 'no';
  return { question, result };
};

const prime = () => {
  core(getTask, descriptionTask);
};

export default prime;
