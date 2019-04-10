import readlineSync from 'readline-sync';

export const nameQuestion = readlineSync.question('May I have your name? ');

const brainGames = () => {
  const welcomeText = 'Welcome to the Brain Games!\n';
  console.log(welcomeText);
  console.log(`Hello, ${nameQuestion}!`);
};

export default brainGames;
