const axios = require("axios");

const { getYearRange } = require("../src/utils/getYearRange");
const mockedResponseData = require("../src/utils/__mocks__/oxfordYearsMockResponseData.json");

describe("getWeatherData", () => {
  jest.mock("axios");

  it("Successfully returns the range of years for Oxford", async () => {
    const location = "oxford";

    axios.get = jest.fn().mockResolvedValue({
      data: mockedResponseData,
    });

    const yearRange = await getYearRange({ location: location });

    expect(yearRange.startYear).toEqual(2015);
    jest.clearAllMocks();
  });
});
