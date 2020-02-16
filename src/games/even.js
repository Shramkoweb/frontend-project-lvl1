import hexletPairs from '@hexlet/pairs';

import { playGame } from '../index.js';
import { getRandomNumber, isEven } from '../utils.js';
import { RULE } from '../constants.js';

const generateConditions = () => {
  const question = getRandomNumber();
  const answer = isEven(question) ? 'yes' : 'no';

  return hexletPairs.cons(question, answer);
};

const playEven = () => playGame(RULE.EVEN, generateConditions);

export default playEven;
