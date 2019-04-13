import readlineSync from 'readline-sync';

export const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const getName = readlineSync.question('May I have your name? ');
export const welcome = () => console.log('Welcome to the Brain Games!');
export const congratulation = () => console.log(`Congratulations, ${getName}`);
export const printCorrect = () => console.log('Correct!');
export const threeQuestions = 3;
export const num1 = () => getRandom(1, 100);
export const num2 = () => getRandom(1, 100);
