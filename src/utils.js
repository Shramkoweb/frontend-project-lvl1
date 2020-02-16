import { NUMBER_RANGE } from './constants.js';

const isEven = (number) => number % 2 === 0;

const getRandomArbitrary = (min, max) => Math.floor(Math.random() * (max - min) + min);

const getRandomNumber = () => getRandomArbitrary(NUMBER_RANGE.MIN, NUMBER_RANGE.MAX);

export {
  getRandomArbitrary,
  getRandomNumber,
  isEven,
};
