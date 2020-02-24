import { playGame } from '../index.js';
import { getRandomArbitrary, getRandomNumbers } from '../utils.js';
import { cons } from '../pairs.js';

const PROGRESSION_LENGTH = 10;
const RULE = 'What number is missing in the progression?';

const generateProgression = (length) => {
  const [start, step] = getRandomNumbers(2, 1, PROGRESSION_LENGTH);
  const result = [];

  for (let i = 0; i < length; i += 1) {
    result.push(start + step * i);
  }

  return result;
};

const generateConditions = () => {
  const progression = generateProgression(PROGRESSION_LENGTH);
  const hiddenIndex = getRandomArbitrary(0, PROGRESSION_LENGTH);

  const answer = progression.splice(hiddenIndex, 1, '..');
  const question = progression.join(' ');

  return cons(question, answer.toString(10));
};

const playProgression = () => playGame(RULE, generateConditions);

export default playProgression;
