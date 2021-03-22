const axios = require("axios");

const { getMaxTemperatureForLocation } = require("../src/index");
const mockedYearResponseData = require("../src/utils/__mocks__/oxfordYearsMockResponseData.json");
const mockedOxford2015ResponseData = require("../src/utils/__mocks__/oxford2015MockResponseData.json");
const mockedOxford2016ResponseData = require("../src/utils/__mocks__/oxford2016MockResponseData.json");
const mockedOxford2017ResponseData = require("../src/utils/__mocks__/oxford2017MockResponseData.json");

describe("getMaxTemperatureForLocation", () => {
  it("Successfully gets the max temperature from all years for Oxford", async () => {
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

    const result = await getMaxTemperatureForLocation({ location: location });

    expect(result).toEqual(23.5);
  });

  it("returns 0 in case of an error, such as an invalid location", async () => {
    const location = "birmingham";

    axios.get = jest.fn().mockRejectedValue(new Error("test error"));

    const result = await getMaxTemperatureForLocation({
      location: location,
    });

    expect(result).toEqual(0);
  });

  it("Makes the correct calculations when a nested API call fails and returns 0", async () => {
    const location = "oxford";

    axios.get = jest
      .fn()
      .mockResolvedValueOnce({
        data: mockedYearResponseData,
      })
      .mockResolvedValueOnce({
        data: mockedOxford2015ResponseData,
      })
      .mockRejectedValueOnce(new Error("test error"))
      .mockResolvedValueOnce({
        data: mockedOxford2017ResponseData,
      });

    const result = await getMaxTemperatureForLocation({
      location: location,
    });

    expect(axios.get).toHaveBeenCalledTimes(4);
    expect(result).toEqual(23.3);
  });
});
