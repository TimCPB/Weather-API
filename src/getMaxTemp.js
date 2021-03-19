const axios = require("axios");

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
    console.log(res.data);
    // console.log(resultsArray);
    const maxTemp = Math.max(...resultsArray);
    console.log(maxTemp);
  } catch (error) {
    console.log(error);
  }
};

getMaxTemperature({ location: "oxford", year: 2018 });
