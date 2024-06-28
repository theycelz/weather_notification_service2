const axios = require('axios');

exports.fetchWeatherData = async () => {
  try {
    const response = await axios.get('URL_DO_SERVICO_EXTERNO');
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
};
