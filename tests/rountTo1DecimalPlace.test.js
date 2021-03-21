const {
  roundToOneDecimalPlace,
} = require("../src/utils/roundToOneDecimalPlace");

describe("roundToOneDecimalPlace", () => {
  it("Successfully rounds a number to one decimal place", () => {
    const testNumber = 17.55555;

    const result = roundToOneDecimalPlace({ number: testNumber });

    expect(result).toEqual(17.6);
  });

  it("Successfully rounds a recurring fraction to one decimal place", () => {
    const testNumber = 1 / 3;

    const result = roundToOneDecimalPlace({ number: testNumber });

    expect(result).toEqual(0.3);
  });
});
