const axios = require("axios");

const { getMaxTemperature } = require("../src/index");

describe("getMaxTemperature 2", () => {
  it("returns 0 in case of an error", async () => {
    // jest.mock("axios");

    const location = "oxford";
    const year = 1718;

    // axios.get = jest.fn().mockRejectedValue(new Error("test error"));

    const result2 = await getMaxTemperature({ location: location, year: year });

    // console.log(`hello from maxTemp.error.test ${result2}`);

    expect(result2).toEqual(0);
  });
});
