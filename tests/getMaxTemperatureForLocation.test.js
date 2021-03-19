const axios = require("axios");

const {
  getMaxTemperatureForLocation,
  getMaxTemperature,
} = require("../src/index");
const { getYearRange } = require("../src/utils/getYearRange");
const mockedYearResponseData = require("../src/utils/__mocks__/oxfordYearsMockResponseData.json");
const mockedOxford2017ResponseData = require("../src/utils/__mocks__/oxford2017MockResponseData.json");
const mockedOxford2016ResponseData = require("../src/utils/__mocks__/oxford2016MockResponseData.json");
const mockedOxford2015ResponseData = require("../src/utils/__mocks__/oxford2015MockResponseData.json");

describe("getMaxTemperatureForLocation", () => {
  jest.mock("axios");
  it("Successfully gets the max Temperature from all years for Oxford", async () => {
    const location = "oxford";

    axios.get = jest
      .fn()
      .mockResolvedValueOnce({
        data: mockedYearResponseData,
      })
      .mockResolvedValueOnce({
        data: mockedOxford2015ResponseData,
      })
      .mockResolvedValueOnce({
        data: mockedOxford2016ResponseData,
      })
      .mockResolvedValueOnce({
        data: mockedOxford2017ResponseData,
      });

    // const yearRange = await getYearRange({ location: location });
    // console.log(yearRange);

    // const maxTemp = await getMaxTemperature({ location: location, year: 2015 });
    // console.log(maxTemp);

    const result = await getMaxTemperatureForLocation({ location: location });

    expect(result).toEqual(23.5);
  });
});
