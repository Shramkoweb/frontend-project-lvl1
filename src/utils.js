const getRandomArbitrary = (min, max) => {
  const ceilMin = Math.ceil(min);
  const floorMax = Math.floor(max);

  return Math.floor(Math.random() * (floorMax - ceilMin + 1)) + ceilMin;
};

const getRandomItemFrom = (array) => array[Math.floor(Math.random() * array.length)];

export {
  getRandomArbitrary,
  getRandomItemFrom,
};
