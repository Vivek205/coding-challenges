const thatsEnough = (arr, limit) => {
  const occurences = {};

  if (limit <= 0) {
    return [];
  }

  const output = arr.filter((el) => {
    if (!occurences[el]) {
      occurences[el] = 1;
      return true;
    } else if (occurences[el] < limit) {
      occurences[el] += 1;
      return true;
    }
    return false;
  });

  return output;
};

module.exports = thatsEnough;
