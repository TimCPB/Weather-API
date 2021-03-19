const axios = require("axios");

const { getMaxTemperature } = require("../index");

exports.getYearlyMaxTemperatures = async ({ location, yearsArray }) => {
  const yearlyMaxTemperatures = await Promise.all(
    yearsArray.map((year) =>
      getMaxTemperature({ location: location, year: year })
    )
  );

  return yearlyMaxTemperatures;
};
