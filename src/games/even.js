import getRandom from '..';
import core from '../core';

const descriptionTask = 'Answer "yes" if number even otherwise answer "no".\n';
const num = getRandom(1, 100);

const even = () => {
  const isEvenNum = ((num % 2) === 0);
  const result = (isEvenNum ? 'yes' : 'no');
  const question = `Question: ${num}\n`;
  core(question, result, descriptionTask);
};

export default even;
