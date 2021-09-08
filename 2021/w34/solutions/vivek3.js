const mostValuable = (sentence) => {
  const calculatePoint = (word) => {
    word = word.toLowerCase();
    let val = 0;
    let i = 0;
    while (i <= word.length) {
      let charCode = word.charCodeAt(i);
      val += charCode >= 65 && charCode <= 90 ? charCode - 64 : charCode >= 97 && charCode <= 122 ? charCode - 96 : 0;
      i++;
    }

    return val;
  };

  const winner = sentence.split(" ").reduce(
    (acc, cur) => {
      const val = calculatePoint(cur);

      val > acc.val ? (acc = { val, word: cur }) : (acc = acc);
      return acc;
    },
    { val: 0, word: "" }
  );

  // console.log("winner", winner.word);

  return winner.word;
};

module.exports = mostValuable;

// mostValuable("The quick brown fox jumps over the lazy dog"); // return 'jumps'
// mostValuable("The quick jUmPs brown fox jumps over the lazy dog"); // return 'jUmPs'
// mostValuable("Jackdaws love my big sphinx of quartz"); // return 'quartz'
// mostValuable("You go tell that vapid existentialist quack Freddy Nietzsche that he can just bite me twice"); // return 'existentialist'
