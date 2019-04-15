import getRandom from '../utils';
import core from '..';

const descriptionTask = 'Answer "yes" if number even otherwise answer "no".\n';
const isEven = num => ((num % 2) === 0 ? 'yes' : 'no');

const getTask = () => {
  const question = getRandom(1, 100);
  const result = isEven(question);
  return { question, result };
};

const even = () => {
  core(getTask, descriptionTask);
};

export default even;
