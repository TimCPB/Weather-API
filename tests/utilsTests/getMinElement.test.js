const { getMinElement } = require("../../src/utils/getMinElement");

describe("getMinElement", () => {
  it("Returns the minimum element from an array of numbers", () => {
    const array = [6, 0.7, 28, 15];

    result = getMinElement({ array: array });

    expect(result).toEqual(0.7);
  });
});
