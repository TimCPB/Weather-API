const { getMinTemperature } = require("../src/index");

describe("getMinTemperature", () => {
  it("Successfully gets the max Temperature for oxford 2018", async () => {
    const location = "oxford";
    const year = 2018;

    const result = await getMinTemperature({ location: location, year: year });

    expect(result).toEqual(0.3);
  });
});
