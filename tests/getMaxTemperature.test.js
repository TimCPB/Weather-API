const axios = require("axios");

const { getMaxTemperature } = require("../src/index");
const mockedOxford2018ResponseData = require("../src/utils/__mocks__/oxford2018MockResponseData.json");

describe("getMaxTemperature", () => {
  it("Successfully gets the max Temperature for oxford 2018", async () => {
    const location = "oxford";
    const year = 2018;

    axios.get = jest.fn().mockResolvedValue({
      data: mockedOxford2018ResponseData,
    });

    const result = await getMaxTemperature({ location: location, year: year });

    expect(result).toEqual(27.4);
  });
});

it("returns 0 in case of an error, such as an invalid year", async () => {
  const location = "oxford";
  const year = 1258;

  axios.get = jest.fn().mockRejectedValue(new Error("test error"));

  const result = await getMaxTemperature({
    location: location,
    year: year,
  });

  expect(result).toEqual(0);
});
