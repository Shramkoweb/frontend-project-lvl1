import readlineSync from 'readline-sync';
import { car, cdr } from './pairs.js';

const NUMBER_OF_ROUNDS = 3;

const playRounds = (conditions, roundsToWin) => { // return 'false' if gameOver or 'true' if win
  for (let i = 1; i <= roundsToWin; i += 1) {
    const gameConditions = conditions(); // get game conditions pair
    const question = car(gameConditions);
    const answer = cdr(gameConditions);

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (answer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;( Correct answer was '${answer}'`);
      return false;
    }
  }

  return true;
};

const playGame = (rulesOfTheGame, getGameConditions) => {
  console.log('Welcome to the Brain Games!\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}\n`);
  console.log(`${rulesOfTheGame}\n`);

  const canPlayNextRound = playRounds(getGameConditions, NUMBER_OF_ROUNDS);

  if (canPlayNextRound) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};

export default playGame;
