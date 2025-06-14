import { gql } from '@apollo/client';

export const GET_WEATHER = gql`
  query GetWeather($city: String!) {
    weather(city: $city) {
      city
      country
      temperature
      description
      humidity
      windSpeed
      icon
    }
  }
`;

export const GET_FORECAST = gql`
  query GetForecast($city: String!) {
    forecast(city: $city) {
      date
      temperature
      description
      icon
    }
  }
`;
