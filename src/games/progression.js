import playGame from '../index.js';
import { getRandomArbitrary } from '../utils.js';
import { cons } from '../pairs.js';

const PROGRESSION_LENGTH = 10;
const RULE = 'What number is missing in the progression?';

const generateProgression = (length) => {
  const start = getRandomArbitrary(1, length);
  const step = getRandomArbitrary(1, length);
  const result = [];

  for (let i = 0; i < length; i += 1) {
    result.push(start + step * i);
  }

  return result;
};

const generateConditions = () => {
  const numbers = generateProgression(PROGRESSION_LENGTH);
  const hiddenElementIndex = getRandomArbitrary(0, PROGRESSION_LENGTH);

  const numbersWithoutHiddenElement = numbers.splice(hiddenElementIndex, 1, '..');
  const question = numbers.join(' ');

  return cons(question, numbersWithoutHiddenElement.toString(10));
};

const playProgression = () => playGame(RULE, generateConditions);

export default playProgression;
