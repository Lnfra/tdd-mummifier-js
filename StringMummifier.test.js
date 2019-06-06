const StringMummifier = require("./StringMummifier");

describe("String Mummifier", () => {
  it("should not mummify empty string", () => {
    checkMummified("", "");
  });

  it("should not mummify word with no vowels", () => {
    checkMummified("str", "str");
  });

  it("should mummify a vowel", () => {
    checkMummified("a", "mummy");
  });

  it("should mummify consonants and a vowel", () => {
    checkMummified("bla", "blmummy");
  });

  function checkMummified(input, expected) {
    const mummifier = new StringMummifier();
    expect(mummifier.transform(input)).toEqual(expected);
  }
});
