import { playGame } from '../index.js';
import { getRandomArbitrary } from '../utils.js';
import { cons } from '../pairs.js';

const RULE = 'Answer "yes" if the number is even, otherwise answer "no"';
const NUMBER_RANGE = {
  MIN: 0,
  MAX: 100,
};

const isEven = (number) => number % 2 === 0;

const generateConditions = () => {
  const question = getRandomArbitrary(NUMBER_RANGE.MIN, NUMBER_RANGE.MAX);
  const answer = isEven(question) ? 'yes' : 'no';

  return cons(question, answer);
};

const playEven = () => playGame(RULE, generateConditions);

export default playEven;
