import getRandom from '../utils';
import core from '..';

const descriptionTask = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const getTask = () => {
  const question = getRandom(1, 3572);
  const result = isPrime(question) ? 'yes' : 'no';
  return { question, result };
};

const checkIsPrimeNumber = () => {
  core(getTask, descriptionTask);
};

export default checkIsPrimeNumber;
