import React from 'react';
import { Thermometer, Droplets, Wind, MapPin } from 'lucide-react';

const WeatherCard = ({ weather }) => {
  const getWeatherIcon = (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6 max-w-md mx-auto">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <MapPin className="h-5 w-5 text-gray-500 mr-2" />
          <h2 className="text-xl font-semibold text-gray-800">
            {weather.city}, {weather.country}
          </h2>
        </div>
        <img
          src={getWeatherIcon(weather.icon)}
          alt={weather.description}
          className="w-12 h-12"
        />
      </div>
      
      <div className="text-center mb-6">
        <div className="text-4xl font-bold text-gray-800 mb-2">
          {weather.temperature}°C
        </div>
        <p className="text-gray-600 capitalize">{weather.description}</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center">
          <Droplets className="h-5 w-5 text-blue-500 mr-2" />
          <div>
            <p className="text-sm text-gray-600">Humidity</p>
            <p className="font-semibold">{weather.humidity}%</p>
          </div>
        </div>
        <div className="flex items-center">
          <Wind className="h-5 w-5 text-gray-500 mr-2" />
          <div>
            <p className="text-sm text-gray-600">Wind Speed</p>
            <p className="font-semibold">{weather.windSpeed} m/s</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
