import hexletPairs from '@hexlet/pairs';

import { playGame } from '../index.js';
import { getRandomNumber } from '../utils.js';
import { RULE } from '../constants.js';

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

const playGCD = () => playGame(RULE.GCD, generateConditions);

export default playGCD;
