// const testCases = require("../test-cases/spec.json");
const sortItOut = (number) => {
  number = number.toString().split("");
  let noOfZeroes = 0;
  let i = 0;
  let numLen = number.length;

  while (i < numLen - noOfZeroes + 1) {
    if (number[i] === "0") {
      number.splice(i, 1);

      number[numLen - 1] = "0";
      noOfZeroes++;
      continue;

      //   console.log("current index", i);
      //   console.log("current number", number.join(""));
    }
    i++;
  }
  //   console.log("result", parseInt(number.join(""), 10));
  return parseInt(number.join(""), 10);
  //   console.log("no of zeroes", noOfZeroes);
  //   if (!noOfZeroes) {
  //     // console.log("number", number);
  //     // console.log("result", parseInt(number, 10));

  //     return parseInt(number, 10);
  //   }

  //   number = number.replace(/0/g, "");
  //   number = number + "0".repeat(noOfZeroes);
  //   //   console.log("result", parseInt(number, 10));
  //   return parseInt(number, 10);
};

module.exports = sortItOut;

// sortItOut(12); // return 12
// sortItOut(104); // return 140
// sortItOut(331); // return 331
// sortItOut(1200); // return 1200
// sortItOut(5056); // return 5560
// sortItOut(5069666007754);

// testCases.forEach((el) => {
//   const result = sortItOut(el.inputs[0]);
//   if (result !== el.result) {
//     console.log("failed for input:", el.inputs[0], "expected:", el.result, "actual:", result);
//   }
// });
