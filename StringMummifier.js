class StringMummifier {
  transform(word) {
    for (let letter of word) {
      if ("aeiou".includes(letter)) {
        return "mummy";
      }
    }
    return word;
  }
}

module.exports = StringMummifier;
