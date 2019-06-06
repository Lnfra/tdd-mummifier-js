const VOWELS = "aeiou";
const REPLACEMENT = "mummy";

class StringMummifier {
  transform(word) {
    for (let letter of word) {
      if (this.isVowel(letter)) {
        return REPLACEMENT;
      }
    }
    return word;
  }

  isVowel(letter) {
    return VOWELS.includes(letter);
  }
}

module.exports = StringMummifier;
