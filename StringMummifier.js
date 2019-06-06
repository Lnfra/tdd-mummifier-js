const VOWELS = "aeiou";
const REPLACEMENT = "mummy";

class StringMummifier {
  transform(word) {
    if (this.isVowelLessTan30Percent(word)) return word;

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
