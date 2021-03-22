const axios = require("axios");

const { getMinTemperatureForLocation } = require("../src/index");
const mockedYearResponseData = require("../src/utils/__mocks__/oxfordYearsMockResponseData.json");
const mockedOxford2015ResponseData = require("../src/utils/__mocks__/oxford2015MockResponseData.json");
const mockedOxford2016ResponseData = require("../src/utils/__mocks__/oxford2016MockResponseData.json");
const mockedOxford2017ResponseData = require("../src/utils/__mocks__/oxford2017MockResponseData.json");

describe("getMinTemperatureForLocation", () => {
  jest.mock("axios");

  it("Successfully gets the min temperature for all year for Oxford", async () => {
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

    const result = await getMinTemperatureForLocation({ location: location });

    expect(result).toEqual(0.8);
    // axios.get.mockReset();
    jest.clearAllMocks();
  });

  it("returns 0 in case of an error, such as an invalid location", async () => {
    const location = "birmingham";

    axios.get = jest.fn().mockRejectedValue(new Error("test error"));

    const result = await getMinTemperatureForLocation({
      location: location,
    });

    expect(result).toEqual(0);
  });

  it("Makes the correct calculations when a nested API call fails and returns 0, in this case treating 0 as the new minimum value", async () => {
    const location = "oxford";

    axios.get = jest
      .fn()
      .mockResolvedValueOnce({
        data: mockedYearResponseData,
      })
      .mockRejectedValueOnce(new Error("test error"))
      .mockResolvedValueOnce({
        data: mockedOxford2016ResponseData,
      })
      .mockResolvedValueOnce({
        data: mockedOxford2017ResponseData,
      });

    const result = await getMinTemperatureForLocation({ location: location });

    expect(axios.get).toHaveBeenCalledTimes(4);
    expect(result).toEqual(0);
  });
});
