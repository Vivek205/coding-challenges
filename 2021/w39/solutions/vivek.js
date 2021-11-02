// const testCases = require("../test-cases/spec.json")
// console.log("testcases", testCases)

const removeDupes = (string) => {
  // your solution here
  let res = "";
  let occuredChar = [];
  const len = string.length;
  const lowerString = string.toLowerCase();

  let i = 0;
  for (; i < len; i++) {
    const lowerChar = lowerString[i];
    const char = string[i];
    const charCode = char.charCodeAt(0);
    if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122))) {
      res += char;
      continue;
    }
    if (lowerChar !== lowerString[i - 1] && i !== 0) {
      occuredChar = [];
    }
    if (occuredChar.findIndex((el) => el === lowerChar) === -1) {
      occuredChar[i] = lowerChar;
      res += char;
    }
  }
  return res;
};

// removeDupes("abcd"); // return 'abcd'
// removeDupes("ABCD"); // return 'ABCD'
// removeDupes("aabccd"); // return 'abcd'
// removeDupes("aAbCcccd"); // return 'abCd'
// removeDupes("aAbCcccdabbcdDD"); // return 'abCdabcd'

// testCases.map(test => {
// 	const output = removeDupes(test.inputs[0]);
// 	if(output !== test.result){
// 		console.log("Failed input : ", test.inputs[0], "expected : ", test.result, "actual : ", output)
// 	}
// })

module.exports = removeDupes;
