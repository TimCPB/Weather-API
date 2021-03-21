const dotenv = require("dotenv");

dotenv.config();

const { WEATHER_API_BASE_URL, WEATHER_API_KEY } = process.env;

export { WEATHER_API_BASE_URL, WEATHER_API_KEY };
