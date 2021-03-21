const { getArrayAverage } = require("../src/utils/getArrayAverage");

describe("getArrayAverage", () => {
  it("Returns the mean from an array of numbers", () => {
    const array = [4, 14, 3, 45];

    result = getArrayAverage({ array: array });

    expect(result).toEqual(16.5);
  });

  it("Returns the mean from an array including some null values", () => {
    const array = [4.7, null, 3.8, 45.9, 6.9];

    result = getArrayAverage({ array: array });

    expect(result).toEqual(15.325);
  });

  it("Returns null when given an array of only null values", () => {
    const array = [null, null, null];

    result = getArrayAverage({ array: array });

    expect(result).toEqual(null);
  });
});
