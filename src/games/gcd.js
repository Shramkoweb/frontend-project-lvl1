import playGame from '../index.js';
import { getRandomArbitrary } from '../utils.js';
import { cons } from '../pairs.js';

const NUMBER_RANGE = {
  MIN: 1,
  MAX: 100,
};

const RULE = 'Find the greatest common divisor of given numbers.';

const getGCD = (firstNumber, secondNumber) => { // return greatest common divisor
  if (secondNumber === 0) {
    return firstNumber;
  }
  const remainder = firstNumber % secondNumber;

  return getGCD(secondNumber, remainder);
};

const generateConditions = () => {
  const firstNumber = getRandomArbitrary(NUMBER_RANGE.MIN, NUMBER_RANGE.MAX);
  const secondNumber = getRandomArbitrary(NUMBER_RANGE.MIN, NUMBER_RANGE.MAX);

  const numbers = [firstNumber, secondNumber];
  const answer = getGCD(firstNumber, secondNumber);
  const converNumbersToString = numbers.join(', ');

  return cons(converNumbersToString, answer.toString(10));
};

const playGCD = () => playGame(RULE, generateConditions);

export default playGCD;
