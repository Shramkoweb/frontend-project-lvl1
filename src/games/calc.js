import hexletPairs from '@hexlet/pairs';

import { playGame } from '../index.js';
import { getRandomArbitrary, getRandomNumber } from '../utils.js';
import { RULE } from '../constants.js';

const OPERATORS_AMOUNT = 3;

const generateConditions = () => {
  let question; // eslint fix
  let answer; // eslint fix
  const operator = getRandomArbitrary(0, OPERATORS_AMOUNT);
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();

  switch (operator) {
    case 0:
      question = `${firstNumber} + ${secondNumber}`;
      answer = firstNumber + secondNumber;
      break;
    case 1:
      question = `${firstNumber} - ${secondNumber}`;
      answer = firstNumber - secondNumber;
      break;
    default:
      question = `${firstNumber} * ${secondNumber}`;
      answer = firstNumber * secondNumber;
  }

  return hexletPairs.cons(question, answer.toString(10));
};

const playCalc = () => playGame(RULE.CALC, generateConditions);

export default playCalc;
