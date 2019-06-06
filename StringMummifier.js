const VOWELS = "aeiou";
const REPLACEMENT = "mummy";

class StringMummifier {
  transform(word) {
    if (this.isVowelLessTan30Percent(word)) return word;
    return this.replaceVowels(word);
  }

  replaceVowels(word) {
    let mummified = "";

    for (let letter of word) {
      if (!this.isVowel(letter)){
        mummified += letter;
      } else if (!mummified.endsWith(REPLACEMENT)) {
        mummified += REPLACEMENT;
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
