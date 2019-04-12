import readlineSync from 'readline-sync';
import {
  descriptionTask, correct, result, notCorrect, answerRandom,
} from './games/calc';

const getName = readlineSync.question('May I have your name? ');
const threeQuestions = 3;
console.log('Welcome to the Brain Games!');
console.log(descriptionTask);
const core = () => {
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

export default core;
