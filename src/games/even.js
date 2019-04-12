import readlineSync from 'readline-sync';
import core from '..';

const even = () => {
  const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const num = getRandom(1, 100);
  const answer = readlineSync.question(`${num}\n`);
  const isEvenNum = ((num % 2) === 0);
  const correct = (isEvenNum === true && answer === 'yes') || (isEvenNum === false && answer === 'no');
  const notCorrect = (isEvenNum === true && answer === 'no') || (isEvenNum === false && answer === 'yes') || (answer !== 'no' && answer !== 'yes');
  const correctAnswer = (isEvenNum ? 'yes' : 'no');
  const descriptionTask = 'Answer "yes" if number even otherwise answer "no".\n';
  core();
};

export default even;
