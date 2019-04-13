import readlineSync from 'readline-sync';

export const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const getName = readlineSync.question('May I have your name? ');
export const welcome = () => console.log('Welcome to the Brain Games!');
export const congratulate = () => console.log(`Congratulations, ${getName}`);
export const printCorrect = () => console.log('Correct!');
export const threeQuestions = 3;
