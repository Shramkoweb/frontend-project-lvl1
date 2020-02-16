import hexletPairs from '@hexlet/pairs';

import { playGame } from '../index.js';
import { getRandomNumber } from '../utils.js';

// todo mv all rules to one constant
const GAME_RULES = 'Find the greatest common divisor of given numbers.';

const getGCD = (firstNumber, secondNumber) => { // return Greatest common divisor
  if (secondNumber === 0) {
    return firstNumber;
  }
  const remainder = firstNumber % secondNumber;

  return getGCD(secondNumber, remainder);
};

const generateConditions = () => {
  const question = [getRandomNumber(), getRandomNumber()];
  const answer = getGCD(...question);
  const formattedQuestion = question.join(', ');

  return hexletPairs.cons(formattedQuestion, answer.toString(10));
};

const playGCD = () => playGame(GAME_RULES, generateConditions);

export default playGCD;
