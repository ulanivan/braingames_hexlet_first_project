import readlineSync from 'readline-sync';
import {
  descriptionTask, result, answer, correct, notCorrect,
} from './games/calc';

const threeQuestions = 3;

const core = () => {
  console.log('Welcome to the Brain Games!');
  console.log(descriptionTask);
  const getName = readlineSync.question('May I have your name? ');
  for (let i = 1; i <= threeQuestions; i += 1) {
    console.log(answer);
    if (correct()) {
      console.log(`Your answer: ${result}`);
      console.log('Correct!');
    }
    if (notCorrect()) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${result}" Let's try again, ${getName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${getName}`);
};

export default core;
