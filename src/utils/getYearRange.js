const axios = require("axios");

exports.getYearRange = async ({ location }) => {
  try {
    const res = await axios.get(
      `https://grudwxjpa2.execute-api.eu-west-2.amazonaws.com/dev/${location}/years`,
      {
        headers: {
          "x-api-key": "mcDLmlxrtw7ZHC70gD8FL4rtrXSPsUEB4iSp4lg3",
        },
      }
    );
    return res.data.result;
  } catch (error) {
    console.log(error);
  }
};

// getYearRange({ location: "heathrow" });
