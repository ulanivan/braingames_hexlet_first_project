import readlineSync from 'readline-sync';
import { core, getRandom } from '..';


export const descriptionTask = 'Answer "yes" if number even otherwise answer "no".\n';
export const getName = readlineSync.question('May I have your name? ');
export const generateRandom = getRandom(1, 100);
export const answerRandom = readlineSync.question(`${generateRandom}\n`);
const isEvenRandom = ((generateRandom % 2) === 0);
export const correct = (isEvenRandom === true && answerRandom === 'yes') || (isEvenRandom === false && answerRandom === 'no');
export const notCorrect = (isEvenRandom === true && answerRandom === 'no') || (isEvenRandom === false && answerRandom === 'yes') || (answerRandom !== 'no' && answerRandom !== 'yes');
export const correctAnswer = (isEvenRandom ? 'yes' : 'no');

const even = () => {
  core();
};

export default even;
