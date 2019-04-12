import readlineSync from 'readline-sync';

const even = () => {
  const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const description = 'Answer "yes" if number even otherwise answer "no".\n';
  const getName = readlineSync.question('May I have your name? ');
  console.log('Welcome to the Brain Games!');
  console.log(`${description}`);
  const threeQuestions = 3;
  for (let i = 1; i <= threeQuestions; i += 1) {
    const generateRandom = getRandom(1, 100);
    const answerRandom = readlineSync.question(`${generateRandom}\n`);
    const isEvenRandom = () => ((generateRandom % 2) === 0);
    const correctYes = isEvenRandom() === true && answerRandom === 'yes';
    const correctNo = isEvenRandom() === false && answerRandom === 'no';
    const notCorrectYes = isEvenRandom() === true && answerRandom === 'no';
    const notCorrectNo = isEvenRandom() === false && answerRandom === 'yes';
    const otherAnswer = answerRandom !== 'no' && answerRandom !== 'yes';
    const correctAnswer = () => (isEvenRandom() ? 'yes' : 'no');
    if (correctYes || correctNo) {
      console.log('Correct!');
    }
    if (notCorrectYes || notCorrectNo || otherAnswer) {
      console.log(`"${answerRandom}" is wrong answer ;(. Correct answer was "${correctAnswer()}" Let's try again, ${getName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${getName}`);
};

export default even;
