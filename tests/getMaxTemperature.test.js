const axios = require("axios");

const { getMaxTemperature } = require("../src/index");
const mockedResponseData = require("../src/utils/__mocks__/oxford2018ResponseData.json");

jest.mock("axios");

describe("getMaxTemperature", () => {
  it("Successfully gets the max Temperature for oxford 2018", async () => {
    const location = "oxford";
    const year = 2018;

    axios.get = jest.fn().mockResolvedValue({
      data: mockedResponseData,
    });

    const result = await getMaxTemperature({ location: location, year: year });

    expect(result).toEqual(27.4);
  });
});
