const axios = require("axios");

const { getWeatherData } = require("../src/utils/getWeatherData");
const mockedResponseData = require("../src/utils/__mocks__/oxford2018MockResponseData.json");

describe("getWeatherData", () => {
  jest.mock("axios");

  it("Successfully returns all weather data for Oxford 2018", async () => {
    const location = "oxford";
    const year = 2018;

    axios.get = jest.fn().mockResolvedValue({
      data: mockedResponseData,
    });

    const weatherDataArray = await getWeatherData({
      location: location,
      year: year,
    });

    expect(weatherDataArray.length).toEqual(12);
    expect(weatherDataArray[0].temperature_max).toEqual(7.6);
    jest.clearAllMocks();
  });
});
