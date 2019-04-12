import readlineSync from 'readline-sync';
import {
  descriptionTask, correct, result, notCorrect, answerRandom,
} from './games/calc';


const threeQuestions = 3;

const core = () => {
  const getName = readlineSync.question('May I have your name? ');
  console.log('Welcome to the Brain Games!');
  console.log(`${descriptionTask}`);
  for (let i = 1; i <= threeQuestions; i += 1) {
    if (correct) {
      console.log(`Your answer: ${result}`);
      console.log('Correct!');
    }
    if (notCorrect) {
      console.log(`"${answerRandom}" is wrong answer ;(. Correct answer was "${result}" Let's try again, ${getName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${getName}`);
};

export default core;
