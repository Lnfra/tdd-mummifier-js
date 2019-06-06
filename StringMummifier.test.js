const StringMummifier = require("./StringMummifier");

describe("String Mummifier", () => {
  it("should not mummify empty string", () => {
    const mummifier = new StringMummifier();
    expect(mummifier.transform("")).toEqual("");
  });

  it("should not mummify word with no vowels", () => {
    const mummifier = new StringMummifier();
    expect(mummifier.transform("str")).toEqual("str");
  });

  it("should mummify a vowel", () => {
    const mummifier = new StringMummifier();
    expect(mummifier.transform("a")).toEqual("mummy");
  });

  it("should mummify consonants and a vowel", () => {
    const mummifier = new StringMummifier();
    expect(mummifier.transform("bla")).toEqual("blmummy");
  });
});
