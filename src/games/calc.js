import hexletPairs from '@hexlet/pairs';

import { playGame } from '../index.js';
import { getRandomArbitrary, getRandomNumber } from '../utils.js';

const GAME_RULES = 'What is the result of the expression?';
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

const playCalc = () => playGame(GAME_RULES, generateConditions);

export default playCalc;
