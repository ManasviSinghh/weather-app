import React from 'react';

const ForecastCard = ({ forecast }) => {
  const getWeatherIcon = (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}.png`;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-4xl mx-auto">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">5-Day Forecast</h3>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {forecast.map((day, index) => (
          <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">{day.date}</p>
            <img
              src={getWeatherIcon(day.icon)}
              alt={day.description}
              className="w-12 h-12 mx-auto mb-2"
            />
            <p className="font-semibold text-gray-800">{day.temperature}°C</p>
            <p className="text-xs text-gray-600 capitalize">{day.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastCard;
