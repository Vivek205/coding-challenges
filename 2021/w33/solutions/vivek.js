const buildPyramid = (floors, character = "*") => {
    // your solution here
    if (floors === 1) {
      return [character];
    }
    let i = 0;
    let result = [];
    let strLength = (floors - 1) * 2 + 1;
    const char = " ".repeat(strLength);
    for (; i < floors; i++) {
      if (i + 1 === floors) {
        result[i] = character.repeat(strLength);
        break;
      }
      const filler = char.slice(0, floors - i - 1);
      const charLength = 2 * i + 1;
      result[i] = filler + character.repeat(charLength) + filler;
    }
    return result;
  };
  
  console.log(buildPyramid(6));
  
  module.exports = buildPyramid;
  