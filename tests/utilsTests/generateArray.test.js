const { generateArray } = require("../../src/utils/generateArray");

describe("generateArray", () => {
  it("Successfully returns an array of all numbers between a min and a max value, inclusive", () => {
    const minValue = 5;
    const maxValue = 9;

    const expectedResult = [5, 6, 7, 8, 9];
    const result = generateArray({ minimum: minValue, maximum: maxValue });

    expect(result).toEqual(expectedResult);
  });
});
