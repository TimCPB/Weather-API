const axios = require("axios");

const { getAverageSunHoursForLocation } = require("../src/index");
const mockedYearResponseData = require("../src/utils/__mocks__/oxfordYearsMockResponseData.json");
const mockedOxford2015ResponseData = require("../src/utils/__mocks__/oxford2015MockResponseData.json");
const mockedOxford2016ResponseData = require("../src/utils/__mocks__/oxford2016MockResponseData.json");
const mockedOxford2017ResponseData = require("../src/utils/__mocks__/oxford2017MockResponseData.json");

describe("getAverageSunHoursForLocation", () => {
  jest.mock("axios");

  it("Gets average sun hours for Oxford from a range of years with no null values", async () => {
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

    const result = await getAverageSunHoursForLocation({ location: location });

    expect(result).toEqual(129.9);
    jest.clearAllMocks();
  });
});
