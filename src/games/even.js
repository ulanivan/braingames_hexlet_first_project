import readlineSync from 'readline-sync';
import {
  getRandom,
} from '..';
import core from '../core';

const even = () => {
  const descriptionTask = 'Answer "yes" if number even otherwise answer "no".\n';
  const num = getRandom(1, 50);
  const isEvenNum = ((num % 2) === 0);
  const result = (isEvenNum ? 'yes' : 'no');
  const answer = readlineSync.question(`${num}\n`);
  const correct = (isEvenNum === true && answer === 'yes') || (isEvenNum === false && answer === 'no');
  const notCorrect = (isEvenNum === true && answer === 'no') || (isEvenNum === false && answer === 'yes') || (answer !== 'no' && answer !== 'yes');
  core(correct, notCorrect, answer, result, descriptionTask);
};

export default even;
