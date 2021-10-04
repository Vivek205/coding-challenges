const sortItOut = (number) => {
  number = number.toString();
  let noOfZeroes = 0;
  let i = 0;
  let numLen = number.length;
  while (i < numLen) {
    if (number[i] === "0") {
      noOfZeroes++;
    }
    i++;
  }
//   console.log("no of zeroes", noOfZeroes);
  if (!noOfZeroes) {
    // console.log("number", number);
    // console.log("result", parseInt(number, 10));

    return parseInt(number, 10);
  }

  number = number.replace(/0/g, "");
  number = number + "0".repeat(noOfZeroes);
//   console.log("result", parseInt(number, 10));
  return parseInt(number, 10);
};

module.exports = sortItOut;

sortItOut(12); // return 12
sortItOut(104); // return 140
sortItOut(331); // return 331
sortItOut(1200); // return 1200
sortItOut(5056); // return 5560
