const { getWeatherData } = require("./utils/getWeatherData");
const { getYearRange } = require("./utils/getYearRange");

// Get maximum Temperature for a year - Must return a number
exports.getMaxTemperature = async ({ location, year }) => {
  const weatherDataArray = await getWeatherData({
    location: location,
    year: year,
  });
  const maxTemperaturesArray = weatherDataArray.map(
    (month) => month.temperature_max
  );
  const maxTemperature = Math.max(...maxTemperaturesArray);
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
  const minTemperature = Math.min(...minTemperaturesArray);
  return minTemperature;
};

// Get maximum Temperature for all years - Must return a number
exports.getMaxTemperatureForLocation = async ({ location }) => {
  const { startYear, endYear } = await getYearRange({ location: location });
  console.log(startYear);
  console.log(endYear);
  let yearsArray = [];
  for (let i = startYear; i <= endYear; i++) {
    yearsArray.push(i);
  }
  yearlyMaxTempsArray = await Promise.all([
    this.getMaxTemperature({ location: location, year: yearsArray[0] }),
    this.getMaxTemperature({ location: location, year: yearsArray[1] }),
    this.getMaxTemperature({ location: location, year: yearsArray[2] }),
  ]);

  return yearlyMaxTempsArray;
};

// Get minimum temperature for all years - Must return a number
exports.getMinTemperatureForLocation = async ({ location }) => {
  return 0;
};

// Get average sun hours for a year - Must return a number
exports.getAverageSunHours = async ({ location, year }) => {
  return 0;
};

// Get average sun hours for all years - Must return a number
exports.getAverageSunHoursForLocation = async ({ location }) => {
  return 0;
};
