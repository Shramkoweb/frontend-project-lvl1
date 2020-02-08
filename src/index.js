import readlineSync from 'readline-sync';

const greeting = () => {
    console.log('Welcome to the Brain Games!\n');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);

  return userName;
};

export default greeting;
