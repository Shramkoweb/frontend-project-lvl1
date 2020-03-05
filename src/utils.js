const getRandomArbitrary = (min, max) => Math.floor(Math.random() * (max - min) + min);

const getRandomItemFrom = (array) => array[Math.floor(Math.random() * array.length)];

export {
  getRandomArbitrary,
  getRandomItemFrom,
};
