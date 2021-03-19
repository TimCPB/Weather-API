const axios = require("axios");

const { getAverageSunHours } = require("../src/index");
const mockedResponseData = require("../src/utils/__mocks__/oxford2018MockResponseData.json");

describe.skip("getAverageSunHours", () => {
  jest.mock("axios");

  it("Successfully gets the average sun hours for Oxford 2018", async () => {
    const location = "oxford";
    const year = 2018;

    axios.get = jest.fn().mockResolvedValue({
      data: mockedResponseData,
    });

    const result = await getAverageSunHours({ location: location, year: year });

    expect(result).toEqual(147.9);
    jest.clearAllMocks();
  });
});
