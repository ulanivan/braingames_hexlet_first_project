import readlineSync from 'readline-sync';

const threeQuestions = 3;

const core = (question, result, descriptionTask) => {
  const getName = readlineSync.question('May I have your name? ');
  console.log('Welcome to the Brain Games!');
  console.log(descriptionTask);
  for (let i = 1; i <= threeQuestions; i += 1) {
    const answer = readlineSync.question(question);
    const correct = result === answer;
    const notCorrect = result !== answer;
    if (correct) {
      console.log(`Your answer: ${answer}`);
      console.log('Correct!');
    }
    if (notCorrect) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${result}"\nLet's try again, ${getName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${getName}`);
};

export default core;
