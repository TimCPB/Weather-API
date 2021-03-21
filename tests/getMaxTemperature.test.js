const axios = require("axios");

const { getMaxTemperature } = require("../src/index");
const mockedResponseData = require("../src/utils/__mocks__/oxford2018MockResponseData.json");

describe("getMaxTemperature", () => {
  it("Successfully gets the max Temperature for oxford 2018", async () => {
    jest.mock("axios");
    const location = "oxford";
    const year = 2018;

    axios.get = jest.fn().mockResolvedValue({
      data: mockedResponseData,
    });

    const result = await getMaxTemperature({ location: location, year: year });

    expect(result).toEqual(27.4);
    jest.clearAllMocks();
  });
});

// describe("getMaxTemperature 2", () => {
//   it("returns 0 in case of an error", async () => {
//     const location = "oxford";
//     const year = 1818;

//     const result2 = await getMaxTemperature({ location: "oxford", year: 1818 });

//     console.log(result2);

//     expect(result2).toEqual(0);
//   });
// });
