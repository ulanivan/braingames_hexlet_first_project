import getRandom from '../utils';
import core from '..';

const descriptionTask = 'Answer "yes" if number even otherwise answer "no".\n';
const num = getRandom(1, 100);


const even = () => {
  const isEvenNum = ((num % 2) === 0);
  const result = (isEvenNum ? 'yes' : 'no');
  const question = `${num}`;
  core(question, result, descriptionTask);
};


export default even;
