import readlineSync from 'readline-sync';

const amountQuestions = 3;

const core = (getTask, descriptionTask) => {
  const getName = readlineSync.question('May I have your name? ');
  console.log('Welcome to the Brain Games!');
  console.log(descriptionTask);
  for (let i = 1; i <= amountQuestions; i += 1) {
    const task = getTask();
    const answer = readlineSync.question(`Question: ${task.question}\n`);
    if (String(task.result) === answer) {
      console.log(`Your answer: ${answer}`);
      console.log('Correct!');
    }
    if (String(task.result) !== answer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${task.result}"\nLet's try again, ${getName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${getName}`);
};

export default core;
