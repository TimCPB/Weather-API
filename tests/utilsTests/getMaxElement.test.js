const { getMaxElement } = require("../../src/utils/getMaxElement");

describe("getMaxElement", () => {
  it("Returns the maximum element from an array of numbers", () => {
    const array = [4, 14, 8, 11];

    result = getMaxElement({ array: array });

    expect(result).toEqual(14);
  });
});
