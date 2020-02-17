import hexletPairs from '@hexlet/pairs';

import { playGame } from '../index.js';
import { getRandomNumber } from '../utils.js';
import { RULE } from '../constants.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const generateConditions = () => {
  const question = getRandomNumber();
  const answer = isPrime(question) ? 'yes' : 'no';

  return hexletPairs.cons(question, answer);
};

const playPrime = () => playGame(RULE.PRIME, generateConditions);

export default playPrime;
