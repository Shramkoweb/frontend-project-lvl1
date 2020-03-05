import playGame from '../index.js';
import { getRandomNumbers } from '../utils.js';
import { cons } from '../pairs.js';

const NUMBER_RANGE = {
  MIN: 1,
  MAX: 100,
};

const RULE = 'Find the greatest common divisor of given numbers.';

const getGCD = (firstNumber, secondNumber) => { // return Greatest common divisor
  if (secondNumber === 0) {
    return firstNumber;
  }
  const remainder = firstNumber % secondNumber;

  return getGCD(secondNumber, remainder);
};

const generateConditions = () => {
  const [firstNumber, secondNumber] = getRandomNumbers(2, NUMBER_RANGE.MIN, NUMBER_RANGE.MAX);

  const question = [firstNumber, secondNumber];
  const answer = getGCD(...question);
  const formattedQuestion = question.join(', ');

  return cons(formattedQuestion, answer.toString(10));
};

const playGCD = () => playGame(RULE.GCD, generateConditions);

export default playGCD;
