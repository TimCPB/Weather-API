const { getMaxTemperature } = require("../src/index");

describe("getMaxTemperature 2", () => {
  it("returns 0 in case of an error", async () => {
    const location = "oxford";
    const year = 1818;

    const result2 = await getMaxTemperature({ location: "oxford", year: 1818 });

    expect(result2).toEqual(0);
  });
});
