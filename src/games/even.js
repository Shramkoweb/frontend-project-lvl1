import readlineSync from 'readline-sync';

import { playGames } from '../index.js';
import { NUMBER_RANGE, ROUNDS } from '../constants.js';
import { getRandomNumber, isEven } from '../utils.js';

const GAME_RULES = 'Answer "yes" if the number is even, otherwise answer "no"';

const init = () => {
  const number = getRandomNumber(NUMBER_RANGE.MIN, NUMBER_RANGE.MAX);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  console.log(`Question: ${number}`);

  const answer = readlineSync.question('Your answer: ');

  if (answer === correctAnswer) {
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'\n`);

  return false;
};

const playEven = () => playGames(init, GAME_RULES, ROUNDS);

export default playEven;
