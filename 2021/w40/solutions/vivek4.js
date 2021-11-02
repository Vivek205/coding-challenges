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

    // const finalCardIndex = finalCards.indexOf(initialCard);
    if (finalCards.includes(initialCard)) {
      finalCards = finalCards.replace(initialCard, "");
    } else if (!result.includes(initialCard)) {
      result.push(initialCard);
    }
  }
  // console.log("output", [...result, ...finalCards])
  return [...result, ...finalCards];
};

// helpJerry("iermnerw", "eenrmwri"); // return []
// helpJerry("abbcse", "bcaedb"); // return ['s', 'd']
// helpJerry("rcjVnbgFkKlRAdhCakABwNdnsSjanDHkEe", "hjRgkaHkeNKnEBFckanjAsAdrjVdDbCnlw"); // return ['S', 'j']
// helpJerry("QEEKFUpHRBNAWHBYUwKqVJBBKJ", "UpKFBUQHJVKEPNqBYKEBABRWwH"); // return ['J', 'P']

//   helpJerry("iermnerw", "eenrmwri"); // return []
//   helpJerry("abbcse", "bcaedb"); // return ['s', 'd']
//   helpJerry("rcjVnbgFkKlRAdhCakABwNdnsSjanDHkEe", "hjRgkaHkeNKnEBFckanjAsAdrjVdDbCnlw"); // return ['S', 'j']
//   helpJerry("QEEKFUpHRBNAWHBYUwKqVJBBKJ", "UpKFBUQHJVKEPNqBYKEBABRWwH"); // return ['J', 'P']

module.exports = helpJerry;
