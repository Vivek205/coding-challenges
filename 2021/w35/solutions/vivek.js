const sortItOut = (number) => {
  number = number.toString();

  const noOfZeroes = number.match(/0/g)?.length;
  if (!noOfZeroes) {
    // console.log("number", number);
    return parseInt(number, 10);
  }

  number = number.replace(/0/g, "");
  number = number + "0".repeat(noOfZeroes);

  return parseInt(number, 10);
};

module.exports = sortItOut;

// sortItOut(12); // return 12
// sortItOut(104); // return 140
// sortItOut(331); // return 331
// sortItOut(1200); // return 1200
// sortItOut(5056); // return 5560
