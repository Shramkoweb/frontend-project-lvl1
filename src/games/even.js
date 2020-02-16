import hexletPairs from '@hexlet/pairs';

import { playGame } from '../index.js';
import { getRandomNumber, isEven } from '../utils.js';

const GAME_RULES = 'Answer "yes" if the number is even, otherwise answer "no"';

const generateConditions = () => {
  const question = getRandomNumber();
  const answer = isEven(question) ? 'yes' : 'no';

  return hexletPairs.cons(question, answer);
};

const playEven = () => playGame(GAME_RULES, generateConditions);

export default playEven;
