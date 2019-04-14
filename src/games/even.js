import getRandom from '../utils';
import core from '..';

const descriptionTask = () => 'Answer "yes" if number even otherwise answer "no".\n';

const getTask = () => getRandom(1, 100);
const getResult = n => ((n % 2) === 0 ? 'yes' : 'no');

const even = () => {
  core(getTask, getResult, descriptionTask);
};


export default even;
