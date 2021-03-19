const { getArrayAverage } = require("../src/utils/getArrayAverage");

describe("getArrayAverage", () => {
  it("Returns the mean from an array of numbers", () => {
    const array = [4, 14, 3, 45];

    result = getArrayAverage({ array: array });

    expect(result).toEqual(16.5);
  });

  it("Returns the mean from an array of non-integer numbers", () => {
    const array = [4.7, 14.2, 3.8, 45.9];

    result = getArrayAverage({ array: array });
    console.log(result);

    expect(result).toEqual(17.15);
  });
});
