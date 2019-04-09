import readlineSync from 'readline-sync';

const brainGames = () => {
  const welcomeText = 'Welcome to the Brain Games!\n';
  console.log(welcomeText);
  const nameQuestion = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameQuestion}!`);
};

export default brainGames;
