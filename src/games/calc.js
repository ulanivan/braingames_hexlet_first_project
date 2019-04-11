import readlineSync from 'readline-sync';

const description = 'What is the result of the expression?\n';
const getName = readlineSync.question('May I have your name? ');
const threeQuestions = 3;
const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const calc = () => {
  console.log('Welcome to the Brain Games!');
  console.log(`${description}`);
  for (let i = 1; i <= threeQuestions; i += 1) {
    const symbolStr = '+-*';
    const randomSymbol = () => symbolStr.charAt(getRandom(0, 2));
    const num1 = getRandom(1, 100);
    const num2 = getRandom(1, 100);
    const symbol = randomSymbol();
    const randomExpression = `${num1} ${symbol} ${num2}`;
    const answerRandom = readlineSync.question(`${randomExpression}\n`);
    const resultExpression = () => {
      let result = 0;
      if (symbol === '+') result = num1 + num2;
      if (symbol === '-') result = num1 - num2;
      if (symbol === '*') result = num1 * num2;
      return result;
    };
    const correct = resultExpression() === Number(answerRandom);
    const notCorrect = resultExpression() !== Number(answerRandom);
    if (correct) {
      console.log('Correct!');
    }
    if (notCorrect) {
      console.log(`"${answerRandom}" is wrong answer ;(. Correct answer was "${resultExpression()}" Let's try again, ${getName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${getName}`);
};

export default calc;
