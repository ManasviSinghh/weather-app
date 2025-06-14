import { weatherApi } from '../services/weatherApi';

export const resolvers = {
  Query: {
    weather: async (_, { city }) => {
      try {
        const data = await weatherApi.getCurrentWeather(city);
        return {
          city: data.name,
          country: data.sys.country,
          temperature: Math.round(data.main.temp),
          description: data.weather[0].description,
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          icon: data.weather[0].icon
        };
      } catch (error) {
        throw new Error(error.message);
      }
    },
    
    forecast: async (_, { city }) => {
      try {
        const data = await weatherApi.getForecast(city);
        return data.list.slice(0, 5).map(item => ({
          date: new Date(item.dt * 1000).toLocaleDateString(),
          temperature: Math.round(item.main.temp),
          description: item.weather[0].description,
          icon: item.weather[0].icon
        }));
      } catch (error) {
        throw new Error(error.message);
      }
    }
  }
};
