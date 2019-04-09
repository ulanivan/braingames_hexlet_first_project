import readlineSync from 'readline-sync';

const welcomeText = 'Welcome to the Brain Games!\n'; 
console.log(welcomeText);
const nameQuestion = readlineSync.question('May I have your name? ');

export default nameQuestion;