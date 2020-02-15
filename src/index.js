import readlineSync from 'readline-sync';

const getUserName = () => {
  console.log('Welcome to the Brain Games!\n');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);

  return userName;
};

const isEven = (number) => number % 2 === 0;

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

export {
  getRandomNumber,
  getUserName,
  isEven,
};
