const axios = require("axios");

const { getMaxTemperature } = require("../src/index");
const mockedResponseData = require("../src/utils/__mocks__/oxford2018MockResponseData.json");

jest.mock("axios");

// afterEach(() => {
//   cleanUpDatabase(globalDatabase);
// });

describe("getMaxTemperature", () => {
  it("Successfully gets the max Temperature for oxford 2018", async () => {
    const location = "oxford";
    const year = 2018;

    axios.get = jest.fn().mockResolvedValue({
      data: mockedResponseData,
    });

    const result = await getMaxTemperature({ location: location, year: year });

    expect(result).toEqual(27.4);
    axios.get.mockReset();
  });
});

// describe("getMaxTemperature 2", () => {
it("returns 0 in case of an error, such as an invalid year", async () => {
  const location = "oxford";
  const year = 2004;

  axios.get = jest.fn().mockRejectedValue(new Error("test error"));

  const result = await getMaxTemperature({
    location: location,
    year: year,
  });

  expect(result).toEqual(0);
  // axios.get.mockClear();
});
// });
