import readlineSync from 'readline-sync';
import { nameQuestion } from './index';


const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const isEven = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  for (let i = 1; i <= 3; i += 1) {
    const randomNum = getRandom(1, 100);
    const isEvenRundom = randomNum % 2;

    const answerRandom = readlineSync.question(`${randomNum}\n`);
    if (isEvenRundom === 0 && answerRandom === 'yes') {
      console.log('Correct!');
    }
    if (isEvenRundom === 0 && answerRandom === 'no') {
      console.log(`"no" is wrong answer ;(. Correct answer was "yes" Let's try again, ${nameQuestion}!`);
      return;
    }
    if (isEvenRundom !== 0 && answerRandom === 'no') {
      console.log('Correct!');
    }
    if (isEvenRundom !== 0 && answerRandom === 'yes') {
      console.log(`"yes" is wrong answer ;(. Correct answer was "no" Let's try again, ${nameQuestion}!`);
      return;
    }
    if (isEvenRundom === 0 && (answerRandom !== 'no' && answerRandom !== 'yes')) {
      console.log(`"${answerRandom}" is wrong answer ;(. Correct answer was "yes" Let's try again, ${nameQuestion}!`);
      return;
    }
    if (isEvenRundom !== 0 && (answerRandom !== 'no' && answerRandom !== 'yes')) {
      console.log(`"${answerRandom}" is wrong answer ;(. Correct answer was "no" Let's try again, ${nameQuestion}!`);
      return;
    }
  }
  console.log(`Congratulations, ${nameQuestion}`);
};

export default isEven;
