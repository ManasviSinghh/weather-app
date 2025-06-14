import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Cloud, AlertCircle } from 'lucide-react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import ForecastCard from './components/ForecastCard';
import LoadingSpinner from './components/LoadingSpinner';
import { GET_WEATHER, GET_FORECAST } from './graphql/schema';

function App() {
  const [selectedCity, setSelectedCity] = useState('');
  
  const { 
    loading: weatherLoading, 
    error: weatherError, 
    data: weatherData 
  } = useQuery(GET_WEATHER, {
    variables: { city: selectedCity },
    skip: !selectedCity,
    errorPolicy: 'all'
  });

  const { 
    loading: forecastLoading, 
    error: forecastError, 
    data: forecastData 
  } = useQuery(GET_FORECAST, {
    variables: { city: selectedCity },
    skip: !selectedCity,
    errorPolicy: 'all'
  });

  const handleSearch = (city) => {
    setSelectedCity(city);
  };

  const loading = weatherLoading || forecastLoading;
  const error = weatherError || forecastError;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Cloud className="h-12 w-12 text-white mr-3" />
            <h1 className="text-4xl font-bold text-white">Weather App</h1>
          </div>
          <p className="text-blue-100">Get current weather and 5-day forecast for any city</p>
        </div>

        {/* Search Bar */}
        <SearchBar onSearch={handleSearch} loading={loading} />

        {/* Loading State */}
        {loading && <LoadingSpinner />}

        {/* Error State */}
        {error && !loading && (
          <div className="max-w-md mx-auto mb-6">
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg flex items-center">
              <AlertCircle className="h-5 w-5 mr-2" />
              <span>{error.message}</span>
            </div>
          </div>
        )}

        {/* Weather Data */}
        {!loading && !error && weatherData?.weather && (
          <div className="space-y-6">
            <WeatherCard weather={weatherData.weather} />
            {forecastData?.forecast && (
              <ForecastCard forecast={forecastData.forecast} />
            )}
          </div>
        )}

        {/* Initial State */}
        {!selectedCity && !loading && (
          <div className="text-center text-white">
            <Cloud className="h-24 w-24 mx-auto mb-4 opacity-50" />
            <p className="text-xl">Search for a city to get started</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
