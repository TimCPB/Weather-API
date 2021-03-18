const { getMaxTemperatureForLocation } = require("../src/index");

describe("getMaxTemperatureForLocation", () => {
  it.skip("Successfully gets the max Temperature from all years for Oxford", async () => {
    const location = "oxford";

    const result = await getMaxTemperatureForLocation({ location: location });

    expect(result).toEqual(0.3);
  });
});
