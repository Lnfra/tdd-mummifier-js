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

  it("should not mummify word with less than 30% vowels", () => {
    checkMummified("blah", "blah");
  });

  it("should mummify continuous vowels only once", () => {
    checkMummified("blaa", "blmummy");
  });

  it("should mummify multiple sets of vowels", () => {
    checkMummified("blaaha", "blmummyhmummy");
  });

  it("should mummify vowels which are capitalised", () => {
    checkMummified("blA", "blmummy");
  });

  it("should raise an error if input is undefined", () => {
    const mummifier = new StringMummifier();
    const t = () => {
      mummifier.transform();
    };
    expect(t).toThrow(new Error("Please input a string"));
  });

  function checkMummified(input, expected) {
    const mummifier = new StringMummifier();
    expect(mummifier.transform(input)).toEqual(expected);
  }
});
