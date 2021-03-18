const axios = require("axios");

// Get maximum Temperature for a year - Must return a number
exports.getMaxTemperature = async ({ location, year }) => {
  try {
    const res = await axios.get(
      `https://grudwxjpa2.execute-api.eu-west-2.amazonaws.com/dev/${location}/year/${year}`,
      {
        headers: {
          "x-api-key": "mcDLmlxrtw7ZHC70gD8FL4rtrXSPsUEB4iSp4lg3",
        },
      }
    );
    const maxTemperaturesArray = res.data.result.map(
      (month) => month.temperature_max
    );
    const maxTemperature = Math.max(...maxTemperaturesArray);
    return maxTemperature;
  } catch (error) {
    console.log(error);
  }
};

// Get minimum temperature for a year - Must return a number
exports.getMinTemperature = async ({ location, year }) => {
  try {
    const res = await axios.get(
      `https://grudwxjpa2.execute-api.eu-west-2.amazonaws.com/dev/${location}/year/${year}`,
      {
        headers: {
          "x-api-key": "mcDLmlxrtw7ZHC70gD8FL4rtrXSPsUEB4iSp4lg3",
        },
      }
    );
    const minTemperaturesArray = res.data.result.map(
      (month) => month.temperature_min
    );
    const minTemperature = Math.min(...minTemperaturesArray);
    return minTemperature;
  } catch (error) {
    console.log(error);
  }
};

// Get maximum Temperature for all years - Must return a number
exports.getMaxTemperatureForLocation = async ({ location }) => {
  return 0;
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
