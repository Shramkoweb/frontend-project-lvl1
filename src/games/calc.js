import hexletPairs from '@hexlet/pairs';

import { playGame } from '../index.js';
import { getRandomArbitrary, getRandomNumbers } from '../utils.js';

const OPERATORS_AMOUNT = 3;
const RULE = 'What is the result of the expression?';

const NUMBER_RANGE = {
  MIN: 0,
  MAX: 15,
};

const generateConditions = () => {
  let question; // eslint fix
  let answer; // eslint fix
  const [firstNumber, secondNumber] = getRandomNumbers(2, NUMBER_RANGE.MIN, NUMBER_RANGE.MAX);
  const operator = getRandomArbitrary(0, OPERATORS_AMOUNT);

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

const playCalc = () => playGame(RULE, generateConditions);

export default playCalc;
