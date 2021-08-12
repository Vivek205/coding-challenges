const imSpecial = (arr) => {
  let [first, ...restArr] = arr;
  if (!restArr.includes(first)) {
    return first;
  }
  for (i = 0; i < restArr.length; i++) {
    if (first !== restArr[i]) return restArr[i];
  }
};
module.exports = imSpecial;
