const axios = require("axios");

const { WEATHER_API_BASE_URL, WEATHER_API_KEY } = require("../config");

exports.getYearRange = async ({ location }) => {
  try {
    const res = await axios.get(`${WEATHER_API_BASE_URL}${location}/years`, {
      headers: {
        "x-api-key": `${WEATHER_API_KEY}`,
      },
    });
    return res.data.result;
  } catch (error) {
    console.log(error.response.data);
  }
};
