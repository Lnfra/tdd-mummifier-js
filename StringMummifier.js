const VOWELS = "aeiou";
const REPLACEMENT = "mummy";

class StringMummifier {
  transform(word) {
    let mummified = "";

    for (let letter of word) {
      if (this.isVowel(letter)) {
        mummified += REPLACEMENT;
      } else {
        mummified += letter;
      }
    }
    return mummified;
  }

  isVowel(letter) {
    return VOWELS.includes(letter);
  }
}

module.exports = StringMummifier;
