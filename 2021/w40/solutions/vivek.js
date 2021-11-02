/**
 *
 * @param {string} initialCards
 * @param {string} finalCards
 * @returns
 */
const helpJerry = (initialCards, finalCards) => {
  let i = 0;

  let initialCount = [];
  let result = new Set();
  for (; i < initialCards.length; i++) {
    const initialCard = initialCards[i];

    const finalCardIndex = finalCards.indexOf(initialCard);
    if (finalCardIndex !== -1) {
      finalCards = finalCards.substring(0, finalCardIndex) + finalCards.substring(finalCardIndex + 1);
    } else {
      result.add(initialCard);
    }
  }
  return [...result, ...finalCards];
};

// helpJerry("iermnerw", "eenrmwri"); // return []
// helpJerry("abbcse", "bcaedb"); // return ['s', 'd']
// helpJerry("rcjVnbgFkKlRAdhCakABwNdnsSjanDHkEe", "hjRgkaHkeNKnEBFckanjAsAdrjVdDbCnlw"); // return ['S', 'j']
// helpJerry("QEEKFUpHRBNAWHBYUwKqVJBBKJ", "UpKFBUQHJVKEPNqBYKEBABRWwH"); // return ['J', 'P']

module.exports = helpJerry;
