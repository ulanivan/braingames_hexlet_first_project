import getRandom from '../utils';
import core from '..';

const descriptionTask = () => 'Answer "yes" if number even otherwise answer "no".\n';

const getTask = () => {
  const question = getRandom(1, 100);
  const result = ((question % 2) === 0 ? 'yes' : 'no');
  return { question, result };
};

const even = () => {
  core(getTask, descriptionTask);
};

export default even;
