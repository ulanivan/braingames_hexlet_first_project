
import {
  getName, welcome, congratulation, printCorrect, threeQuestions,
} from '.';

const core = (correct, notCorrect, answer, result, descriptionTask) => {
  welcome();
  console.log(descriptionTask);
  for (let i = 1; i <= threeQuestions; i += 1) {
    if (correct) {
      console.log(`Your answer: ${answer}`);
      printCorrect();
    }
    if (notCorrect) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${result}" Let's try again, ${getName}!`);
      return;
    }
  }
  congratulation();
};

export default core;
