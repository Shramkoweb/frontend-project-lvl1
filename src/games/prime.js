import hexletPairs from '@hexlet/pairs';

import { playGame } from '../index.js';
import { getRandomArbitrary } from '../utils.js';

const RULE = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const NUMBER_RANGE = {
  MIN: 0,
  MAX: 20,
};

const isPrime = (number) => {
  if (number <= 1) return false;
  if (number <= 3) return true;

  if (number % 2 === 0 || number % 3 === 0) return false;

  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false;
    }
  }

  return true;
};

const generateConditions = () => {
  const question = getRandomArbitrary(NUMBER_RANGE.MIN, NUMBER_RANGE.MAX);
  const answer = isPrime(question) ? 'yes' : 'no';

  return hexletPairs.cons(question, answer);
};

const playPrime = () => playGame(RULE, generateConditions);

export default playPrime;
