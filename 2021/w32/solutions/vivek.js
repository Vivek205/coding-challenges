const imSpecial = (arr) => {
  let i = 0;
  while (arr[i] === arr[i + 1]) {
    i++;
  }
  return i === 0 ? (arr[1] === arr[2] ? arr[0] : arr[1]) : arr[i + 1];
};

module.exports = imSpecial;
