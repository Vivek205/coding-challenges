/**
 *
 * @param {string} initialCards
 * @param {string} finalCards
 * @returns
 */
const helpJerry = (initialCards, finalCards) => {
  let i = 0;
  let result = [];
  finalCards = [...finalCards];
  for (; i < initialCards.length; i++) {
    const initialCard = initialCards[i];

    const finalCardIndex = finalCards.findIndex((el) => el === initialCard);
    if (finalCardIndex !== -1) {
      // finalCards = finalCards.substring(0, finalCardIndex) + finalCards.substring(finalCardIndex + 1);
      finalCards.splice(finalCardIndex, 1);
    } else if (result.findIndex((el) => el === initialCard) === -1) {
      result.push(initialCard);
    }
  }
//   console.log("outpyt", result.concat(finalCards));
  return result.concat(finalCards);
};

// helpJerry("iermnerw", "eenrmwri"); // return []
// helpJerry("abbcse", "bcaedb"); // return ['s', 'd']
// helpJerry("rcjVnbgFkKlRAdhCakABwNdnsSjanDHkEe", "hjRgkaHkeNKnEBFckanjAsAdrjVdDbCnlw"); // return ['S', 'j']
// helpJerry("QEEKFUpHRBNAWHBYUwKqVJBBKJ", "UpKFBUQHJVKEPNqBYKEBABRWwH"); // return ['J', 'P']

module.exports = helpJerry;
