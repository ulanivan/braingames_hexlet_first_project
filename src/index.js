import readlineSync from 'readline-sync';

const amountQuestions = 3;

const core = (getTask, descriptionTask) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${descriptionTask}\n`);
  const getName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${getName}!\n`);
  for (let i = 1; i <= amountQuestions; i += 1) {
    const task = getTask();
    const answer = readlineSync.question(`Question: ${task.question}\n`);
    if (task.result === answer) {
      console.log(`Your answer: ${answer}`);
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${task.result}"`);
      console.log(`Let's try again, ${getName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${getName}`);
};

export default core;
