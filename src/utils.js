const getRandomArbitrary = (min, max) => Math.floor(Math.random() * (max - min) + min);

const getRandomNumbers = (amount, min, max) => {
  const result = [];
  for (let i = 0; i < amount; i += 1) {
    result.push(getRandomArbitrary(min, max));
  }

  return result;
};

export {
  getRandomArbitrary,
  getRandomNumbers,
};
