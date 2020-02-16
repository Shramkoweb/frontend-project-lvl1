import hexletPairs from '@hexlet/pairs';

import { playGame } from '../index.js';
import { RULE } from '../constants.js';
import { getRandomNumber } from '../utils.js';

const PROGRESSION_LENGTH = 10;
const randomStart = getRandomNumber();
const randomStep = getRandomNumber();

const generateProgression = (start, step, length) => {
  const result = [];
  let stepNumber = start;
  for (let i = 0; i < length; i += 1) {
    result.push(stepNumber);
    stepNumber += step;
  }

  return result;
};

const generateConditions = () => {
  const progression = generateProgression(randomStart, randomStep, PROGRESSION_LENGTH);
  const hiddenIndex = Math.floor(Math.random() * progression.length);

  const answer = progression.splice(hiddenIndex, 1, '..');
  const question = progression.join(' ');

  return hexletPairs.cons(question, answer.toString(10));
};

const playProgression = () => playGame(RULE.PROGRESSION, generateConditions);

export default playProgression;
