import readlineSync from 'readline-sync';
import { 
  cons, car, cdr,
} from 'hexlet-pairs';
import {
  descriptionTask, correct, result, notCorrect, answerRandom,
} from './games/calc';

const threeQuestions = 3;
export const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const randomNumbers = cons(getRandom(1, 100), getRandom(1, 100));
export const num1 = car(randomNumbers);
export const num2 = cdr(randomNumbers);

export const core = () => {
  const getName = readlineSync.question('May I have your name? ');
  console.log('Welcome to the Brain Games!');
  console.log(`${descriptionTask}`);
  console.log(typeof (answerRandom));
  console.log(typeof (result));
  for (let i = 1; i <= threeQuestions; i += 1) {
    if (correct()) {
      console.log(`Your answer: ${result}`);
      console.log('Correct!');
    }
    if (notCorrect()) {
      console.log(`"${answerRandom}" is wrong answer ;(. Correct answer was "${result}" Let's try again, ${getName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${getName}`);
};
