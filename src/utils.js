const isEven = (number) => number % 2 === 0;

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

export {
  getRandomNumber,
  isEven,
};
