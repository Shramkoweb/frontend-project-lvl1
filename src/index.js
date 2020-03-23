import readlineSync from 'readline-sync';
import { car, cdr } from './pairs.js';

const NUMBER_OF_ROUNDS = 3;

const playRounds = (getGameConditions, roundsToWin, userName) => {
  for (let i = 1; i <= roundsToWin; i += 1) {
    const gameConditions = getGameConditions(); // get game conditions pair
    const question = car(gameConditions);
    const answer = cdr(gameConditions);

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (answer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;( Correct answer was '${answer}'`);
      console.log(`Let's try again, ${userName}!`);
      return false;
    }
  }

  console.log(`Congratulations, ${userName}!`);
  return true;
};

const playGame = (rulesOfTheGame, getGameConditions) => {
  console.log('Welcome to the Brain Games!\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}\n`);
  console.log(`${rulesOfTheGame}\n`);

  playRounds(getGameConditions, NUMBER_OF_ROUNDS, userName);
};

export default playGame;
