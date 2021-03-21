const { generateArray } = require("./utils/generateArray");
const { getArrayAverage } = require("./utils/getArrayAverage");
const { getMinElement } = require("./utils/getMinElement");
const { getMaxElement } = require("./utils/getMaxElement");
const { getWeatherData } = require("./utils/getWeatherData");
// const {
//   getYearlyMaxTemperatures,
// } = require("./utils/getYearlyMaxTemperatures");
const { getYearRange } = require("./utils/getYearRange");
const {
  roundToOneDecimalPlace,
} = require("../src/utils/roundToOneDecimalPlace");

// Get maximum Temperature for a year - Must return a number
exports.getMaxTemperature = async ({ location, year }) => {
  const weatherDataArray = await getWeatherData({
    location: location,
    year: year,
  });
  const maxTemperaturesArray = weatherDataArray.map(
    (month) => month.temperature_max
  );
  const maxTemperature = getMaxElement({ array: maxTemperaturesArray });

  return maxTemperature;
};

// Get minimum temperature for a year - Must return a number
exports.getMinTemperature = async ({ location, year }) => {
  const weatherDataArray = await getWeatherData({
    location: location,
    year: year,
  });
  const minTemperaturesArray = weatherDataArray.map(
    (month) => month.temperature_min
  );
  const minTemperature = getMinElement({ array: minTemperaturesArray });

  return minTemperature;
};

// Get maximum Temperature for all years - Must return a number
exports.getMaxTemperatureForLocation = async ({ location }) => {
  const { startYear, endYear } = await getYearRange({ location: location });
  const yearsArray = generateArray({ minimum: startYear, maximum: endYear });

  const yearlyMaxTempsArray = await Promise.all(
    yearsArray.map((year) =>
      this.getMaxTemperature({ location: location, year: year })
    )
  );
  // const yearlyMaxTempsArray = await getYearlyMaxTemperatures({
  //   location: location,
  //   yearsArray: yearsArray,
  // });

  const maxTemperature = getMaxElement({ array: yearlyMaxTempsArray });

  return maxTemperature;
};

// Get minimum temperature for all years - Must return a number
exports.getMinTemperatureForLocation = async ({ location }) => {
  const { startYear, endYear } = await getYearRange({ location: location });
  const yearsArray = generateArray({ minimum: startYear, maximum: endYear });

  const yearlyMinTempsArray = await Promise.all(
    yearsArray.map((year) =>
      this.getMinTemperature({ location: location, year: year })
    )
  );

  const minTemperature = getMinElement({ array: yearlyMinTempsArray });

  return minTemperature;
};

// Get average sun hours for a year - Must return a number
exports.getAverageSunHours = async ({ location, year }) => {
  const weatherDataArray = await getWeatherData({
    location: location,
    year: year,
  });

  const sunHoursArray = weatherDataArray.map((month) => month.sun);

  const averageSunHours = getArrayAverage({ array: sunHoursArray });

  return roundToOneDecimalPlace({ number: averageSunHours });
};

// Get average sun hours for all years - Must return a number
exports.getAverageSunHoursForLocation = async ({ location }) => {
  const { startYear, endYear } = await getYearRange({ location: location });
  const yearsArray = generateArray({ minimum: startYear, maximum: endYear });

  const yearlyAverageSunHoursArray = await Promise.all(
    yearsArray.map((year) =>
      this.getAverageSunHours({ location: location, year: year })
    )
  );

  const averageSunHours = getArrayAverage({
    array: yearlyAverageSunHoursArray,
  });

  return roundToOneDecimalPlace({ number: averageSunHours });
};
