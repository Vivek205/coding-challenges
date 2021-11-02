const addUpWithoutTens = (n) => {
  // your solution here
  let result = Array.from({ length: n }, (_, i) => i + 1)
//   console.log("result", result);

  result = result.reduce((acc, cur) => (cur % 10 === 0 ? acc : acc + cur), 0);
//   console.log("result", result);

  return result;
};

// addUpWithoutTens(1); // returns 1
// addUpWithoutTens(5); // returns 15
// addUpWithoutTens(9); // returns 45
// addUpWithoutTens(10); // returns 45
// addUpWithoutTens(11); // returns 56
// addUpWithoutTens(19); // returns 180
// addUpWithoutTens(20); // returns 180

module.exports = addUpWithoutTens;
