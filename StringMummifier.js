const VOWELS = "aeiou";
const REPLACEMENT = "mummy";

class StringMummifier {
  transform(word) {
    if (this.isVowelLessTan30Percent(word)) return word;
    return this.replaceVowels(word);
  }

  replaceVowels(word) {
    const letterArray = word.split("");
    return letterArray
      .map(letter => {
        if (!this.isVowel(letter)) return letter;
        return REPLACEMENT;
      })
      .join("");
  }

  isVowelLessTan30Percent(word) {
    const vowelCount = word.split("").filter(letter => this.isVowel(letter))
      .length;
    return vowelCount / word.length < 0.3;
  }

  isVowel(letter) {
    return VOWELS.includes(letter);
  }
}

module.exports = StringMummifier;
