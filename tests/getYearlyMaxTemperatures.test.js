const axios = require("axios");

const mockedOxford2016ResponseData = require("../src/utils/__mocks__/oxford2016MockResponseData.json");
const mockedOxford2017ResponseData = require("../src/utils/__mocks__/oxford2017MockResponseData.json");
const mockedOxford2018ResponseData = require("../src/utils/__mocks__/oxford2018MockResponseData.json");

const {
  getYearlyMaxTemperatures,
} = require("../src/utils/getYearlyMaxTemperatures");

describe("getYearlyMaxTemperatures", () => {
  jest.mock("axios");

  it("Returns an array of maximum temperatures when given an array of years", async () => {
    const location = "oxford";
    const yearsArray = [2016, 2017, 2018];
    const expectedYearsArray = [23.5, 23.3, 27.4];

    axios.get = jest
      .fn()
      .mockResolvedValueOnce({
        data: mockedOxford2016ResponseData,
      })
      .mockResolvedValueOnce({
        data: mockedOxford2017ResponseData,
      })
      .mockResolvedValueOnce({
        data: mockedOxford2018ResponseData,
      });

    const result = await getYearlyMaxTemperatures({
      location: location,
      yearsArray: yearsArray,
    });

    expect(result).toContain(expectedYearsArray[0]);
    expect(result).toContain(expectedYearsArray[1]);
    expect(result).toContain(expectedYearsArray[2]);
    jest.clearAllMocks();
  });
});
