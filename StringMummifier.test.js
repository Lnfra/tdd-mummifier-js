const StringMummifier = require("./StringMummifier");

describe("String Mummifier", () => {
  it("should not mummify empty string", () => {
    const mummifier = new StringMummifier();
    expect(mummifier.transform("")).toEqual("");
  });
});
