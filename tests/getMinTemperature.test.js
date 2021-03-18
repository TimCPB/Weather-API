const axios = require("axios");

const { getMinTemperature } = require("../src/index");
const mockedResponseData = require("../src/utils/__mocks__/oxford2018MockResponseData.json");

describe("getMinTemperature", () => {
  it("Successfully gets the min Temperature for oxford 2018", async () => {
    const location = "oxford";
    const year = 2018;

    axios.get = jest.fn().mockResolvedValue({
      data: mockedResponseData,
    });

    const result = await getMinTemperature({ location: location, year: year });

    expect(result).toEqual(0.3);
  });
});
