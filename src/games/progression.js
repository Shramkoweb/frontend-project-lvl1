import hexletPairs from '@hexlet/pairs';

import { playGame } from '../index.js';
import { RULE } from '../constants.js';
import { getRandomNumber } from '../utils.js';

const PROGRESSION_LENGTH = 10;

const generateProgression = (length) => {
  const start = getRandomNumber();
  const step = getRandomNumber();
  const result = [];

  for (let i = 0; i < length; i += 1) {
    result.push(start + step * i);
  }

  return result;
};

const generateConditions = () => {
  const progression = generateProgression(PROGRESSION_LENGTH);
  const hiddenIndex = Math.floor(Math.random() * progression.length);

  const answer = progression.splice(hiddenIndex, 1, '..');
  const question = progression.join(' ');

  return hexletPairs.cons(question, answer.toString(10));
};

const playProgression = () => playGame(RULE.PROGRESSION, generateConditions);

export default playProgression;
