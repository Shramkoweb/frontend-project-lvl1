import playGame from '../index.js';
import { getRandomArbitrary, getRandomItemFrom } from '../utils.js';
import { cons } from '../pairs.js';

const RULE = 'What is the result of the expression?';
const OPERATORS = ['+', '-', '*'];

const NUMBER_RANGE = {
  min: 0,
  max: 15,
};

const generateConditions = () => {
  const firstNumber = getRandomArbitrary(NUMBER_RANGE.min, NUMBER_RANGE.max);
  const secondNumber = getRandomArbitrary(NUMBER_RANGE.min, NUMBER_RANGE.max);
  const operator = getRandomItemFrom(OPERATORS);
  const question = `${firstNumber} ${operator} ${secondNumber}`;

  let answer; // eslint fix

  switch (operator) {
    case '+':
      answer = firstNumber + secondNumber;
      break;
    case '-':
      answer = firstNumber - secondNumber;
      break;
    case '*':
      answer = firstNumber * secondNumber;
      break;
    default:
      throw new Error('Incorrect operator');
  }

  return cons(question, answer.toString(10));
};

const playCalc = () => playGame(RULE, generateConditions);

export default playCalc;
