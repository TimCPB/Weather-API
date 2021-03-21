const axios = require("axios");

const { getArrayAverage } = require("./utils/getArrayAverage");

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
    console.log(res.data);
    // console.log(resultsArray);
    console.log(sunHoursArray);
    console.log(getArrayAverage({ array: sunHoursArray }));
    const maxTemp = Math.max(...resultsArray);
    // console.log(maxTemp);
  } catch (error) {
    console.log(error);
  }
};

getMaxTemperature({ location: "oxford", year: 2015 });
