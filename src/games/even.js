import getRandom from '../utils';
import core from '..';

const descriptionTask = 'Answer "yes" if number even otherwise answer "no".';
const isEven = num => num % 2 === 0;

const getTask = () => {
  const question = getRandom(1, 100);
  let correctAnswer;
  if (isEven(question) === true) {
    correctAnswer = 'yes';
  } else correctAnswer = 'no';
  return { question, correctAnswer };
};

export default () => {
  core(getTask, descriptionTask);
};
