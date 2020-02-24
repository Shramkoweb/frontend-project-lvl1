const cons = (a, b) => {
  const pair = (message) => {
    switch (message) {
      case 'car':
        return a;
      case 'cdr':
        return b;
      default:
        throw new Error(`Unknown message '${message}'`);
    }
  };
  pair.pair = true;
  return pair;
};

const car = (pair) => pair('car');

const cdr = (pair) => pair('cdr');

export {
  car,
  cdr,
  cons,
};
