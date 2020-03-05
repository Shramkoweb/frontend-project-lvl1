import { playGame } from '../index.js';
import { getRandomItemFrom, getRandomNumbers } from '../utils.js';
import { cons } from '../pairs.js';

const RULE = 'What is the result of the expression?';
const OPERATORS = ['+', '-', '*'];

const NUMBER_RANGE = {
  MIN: 0,
  MAX: 15,
};

const generateConditions = () => {
  let answer; // eslint fix
  const [firstNumber, secondNumber] = getRandomNumbers(2, NUMBER_RANGE.MIN, NUMBER_RANGE.MAX);
  const operator = getRandomItemFrom(OPERATORS);
  const question = `${firstNumber} ${operator} ${secondNumber}`;


  switch (operator) {
    case '+':
      answer = firstNumber + secondNumber;
      break;
    case '-':
      answer = firstNumber - secondNumber;
      break;
    default:
      answer = firstNumber * secondNumber;
  }

  return cons(question, answer.toString(10));
};

const playCalc = () => playGame(RULE, generateConditions);

export default playCalc;
