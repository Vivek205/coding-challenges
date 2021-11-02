const substring = String.prototype.substring;
const indexOf = String.prototype.indexOf;

/**
 *
 * @param {string} initialCards
 * @param {string} finalCards
 * @returns
 */
const helpJerry = (initialCards, finalCards) => {
  let i = 0;
  let result = [];
  for (; i < initialCards.length; i++) {
    const initialCard = initialCards[i];

    const finalCardIndex = indexOf.call(finalCards, initialCard);
    if (finalCardIndex !== -1) {
      finalCards = substring.call(finalCards, 0, finalCardIndex) + substring.call(finalCards, finalCardIndex + 1);
    } else if (result.findIndex((el) => el === initialCard) === -1) {
      result.push(initialCard);
    }
  }
  // console.log("output", result.concat(finalCards));
  //   return [...result, ...finalCards];
  //   return result.concat(...finalCards);
  // console.log("final", result.concat(finalCards))
  //   console.log(finalCards.length);
  return finalCards ? result.concat(finalCards) : result;
};

// helpJerry("iermnerw", "eenrmwri"); // return []
// helpJerry("abbcse", "bcaedb"); // return ['s', 'd']
// helpJerry("rcjVnbgFkKlRAdhCakABwNdnsSjanDHkEe", "hjRgkaHkeNKnEBFckanjAsAdrjVdDbCnlw"); // return ['S', 'j']
// helpJerry("QEEKFUpHRBNAWHBYUwKqVJBBKJ", "UpKFBUQHJVKEPNqBYKEBABRWwH"); // return ['J', 'P']

helpJerry("iermnerw", "eenrmwri"); // return []
helpJerry("abbcse", "bcaedb"); // return ['s', 'd']
helpJerry("rcjVnbgFkKlRAdhCakABwNdnsSjanDHkEe", "hjRgkaHkeNKnEBFckanjAsAdrjVdDbCnlw"); // return ['S', 'j']
helpJerry("QEEKFUpHRBNAWHBYUwKqVJBBKJ", "UpKFBUQHJVKEPNqBYKEBABRWwH"); // return ['J', 'P']

module.exports = helpJerry;
