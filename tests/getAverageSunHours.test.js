const axios = require("axios");

const { getAverageSunHours } = require("../src/index");
const mockedOxford2018ResponseData = require("../src/utils/__mocks__/oxford2018MockResponseData.json");

describe("getAverageSunHours", () => {
  it("Successfully gets the average sun hours for Oxford 2018", async () => {
    const location = "oxford";
    const year = 2018;

    axios.get = jest.fn().mockResolvedValue({
      data: mockedOxford2018ResponseData,
    });

    const result = await getAverageSunHours({ location: location, year: year });

    expect(result).toEqual(147.9);
  });

  it("returns 0 in case of an error, such as an invalid year", async () => {
    const location = "oxford";
    const year = 2230;

    axios.get = jest.fn().mockRejectedValue(new Error("test error"));

    const result = await getAverageSunHours({
      location: location,
      year: year,
    });

    expect(result).toEqual(0);
  });
});
