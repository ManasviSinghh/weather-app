import axios from 'axios';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = import.meta.env.VITE_WEATHER_API_URL;

export const weatherApi = {
  getCurrentWeather: async (city) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch weather data: ${error.response?.data?.message || error.message}`);
    }
  },

  getForecast: async (city) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch forecast data: ${error.response?.data?.message || error.message}`);
    }
  }
};
