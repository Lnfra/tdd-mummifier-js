const VOWELS = "aeiou";
const REPLACEMENT = "mummy";

class StringMummifier {
  transform(word) {
    const letterArray = word.split("");
    return letterArray
      .map(letter => {
        if (!this.isVowel(letter)) return letter;
        return REPLACEMENT;
      })
      .join("");
  }

  isVowel(letter) {
    return VOWELS.includes(letter);
  }
}

module.exports = StringMummifier;
