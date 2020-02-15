import readlineSync from 'readline-sync';

import { getRandomNumber, isEven, getUserName } from '../index.js';

const GAME_RULES = 'Answer "yes" if the number is even, otherwise answer "no"';
const ROUNDS = 3;
const NUMBER_RANGE = {
  MIN: 1,
  MAX: 100,
};

const initEvenGame = (rounds) => {
  const playerName = getUserName();
  console.log(GAME_RULES);

  do {
    const number = getRandomNumber(NUMBER_RANGE.MIN, NUMBER_RANGE.MAX);
    const correctAnswer = isEven(number) ? 'yes' : 'no';
    console.log(`Question: ${number}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
      rounds--;
      if (rounds === 0) {
        console.log(`Congratulations, ${playerName}`);
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  } while (rounds);
};

export { ROUNDS };
export default initEvenGame;
