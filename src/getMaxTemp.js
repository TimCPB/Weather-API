const axios = require("axios");

const { getArrayAverage } = require("./utils/getArrayAverage");
const { roundToOneDecimalPlace } = require("./utils/roundToOneDecimalPlace");
const { getAverageSunHours, getMaxTemperature } = require("./index");
const { WEATHER_API_BASE_URL, WEATHER_API_KEY } = require("./config");

getMaxTemps = async ({ location, year }) => {
  try {
    const res = await axios.get(
      `${WEATHER_API_BASE_URL}${location}/year/${year}`,
      {
        headers: {
          "x-api-key": `${WEATHER_API_KEY}`,
        },
      }
    );
    // const resultsArray = res.data.result.map((month) => month.temperature_max);
    // console.log(resultsArray);
    const resultsArray = res.data.result.map((month) => month.temperature_max);
    const sunHoursArray = res.data.result.map((month) => month.sun);
    // console.log(res.data);
    // console.log(resultsArray);
    console.log(sunHoursArray);
    console.log(getArrayAverage({ array: sunHoursArray }));
    const maxTemp = Math.max(...resultsArray);

    const result = await getMaxTemperature({ location: "oxford", year: 2004 });
    console.log(`max temp: ${result}`);

    const result2 = roundToOneDecimalPlace({ number: 12.33333 });
    testError = new Error("test error");
    const result3 = roundToOneDecimalPlace({ number: null });
    const result4 = roundToOneDecimalPlace({ number: testError });

    console.log(`result of rounding legit number: ${result2}`);
    console.log(`result of rounding null value: ${result3}`);
    console.log(`result of rounding an error: ${result4}`);
    // console.log(maxTemp);
  } catch (error) {
    console.log(error);
  }
};

getMaxTemps({ location: "oxford", year: 1968 });
