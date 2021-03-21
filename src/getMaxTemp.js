const axios = require("axios");

const { getArrayAverage } = require("./utils/getArrayAverage");
const { roundToOneDecimalPlace } = require("./utils/roundToOneDecimalPlace");
const { getAverageSunHours } = require("./index");

getMaxTemperature = async ({ location, year }) => {
  try {
    const res = await axios.get(
      `https://grudwxjpa2.execute-api.eu-west-2.amazonaws.com/dev/${location}/year/${year}`,
      {
        headers: {
          "x-api-key": "mcDLmlxrtw7ZHC70gD8FL4rtrXSPsUEB4iSp4lg3",
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

    const result = await getAverageSunHours({ location: "oxford", year: 1903 });
    console.log(`avg sun hours: ${result}`);

    const result2 = roundToOneDecimalPlace({ number: 12.33333 });
    const result3 = roundToOneDecimalPlace({ number: null });

    console.log(`result of rounding legit number: ${result2}`);
    console.log(`result of rounding null value: ${result3}`);
    // console.log(maxTemp);
  } catch (error) {
    console.log(error);
  }
};

getMaxTemperature({ location: "oxford", year: 1903 });
