const mostValuable = (sentence) => {

  const calculatePoint = (word) => {

    word = word.toLowerCase();
    let val = 0;
    let i = 0;
    while (i <= word.length) {
      let charCode = word.charCodeAt(i) - 96;

      val += charCode >= 1 && charCode <= 26 ? charCode : 0;
      i++;
    }

    return val;
  };

  const sentences = sentence
    .split(" ")
    .map((el) => ({ val: calculatePoint(el), word: el }))
    .sort((a, b) => b.val - a.val);
  return sentences[0].word;

};

module.exports = mostValuable;

mostValuable("The quick brown fox jumps over the lazy dog"); // return 'jumps'
mostValuable("The quick jUmPs brown fox jumps over the lazy dog"); // return 'jUmPs'
mostValuable("Jackdaws love my big sphinx of quartz"); // return 'quartz'
mostValuable("You go tell that vapid existentialist quack Freddy Nietzsche that he can just bite me twice"); // return 'existentialist'

