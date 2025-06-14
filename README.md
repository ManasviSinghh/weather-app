# Complete Weather App with React + Vite + GraphQL

## Step 1: Get Weather API Key

1. Go to [OpenWeatherMap](https://openweathermap.org/api)
2. Sign up for a free account
3. Navigate to "API Keys" section in your dashboard
4. Copy your API key (it may take a few minutes to activate)

## Step 2: Project Setup

```bash
# Create new Vite project
npm create vite@latest weather-app -- --template react
cd weather-app

# Install dependencies
npm install
npm install @apollo/client graphql
npm install axios lucide-react

# Install development dependencies
# Install stable version 3
npm install -D tailwindcss@^3.4.0 postcss autoprefixer

# Now initialize
npx tailwindcss init -p
```

## Step 3: Configure Tailwind CSS

Update `tailwind.config.js`:
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Update `src/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Step 4: Environment Variables

Create `.env` file in root directory:
```
VITE_WEATHER_API_KEY=your_openweather_api_key_here
VITE_WEATHER_API_URL=https://api.openweathermap.org/data/2.5
```

## Step 5: Project Structure

```
src/
├── components/
│   ├── WeatherCard.jsx
│   ├── SearchBar.jsx
│   └── LoadingSpinner.jsx
├── graphql/
│   ├── schema.js
│   ├── resolvers.js
│   └── client.js
├── services/
│   └── weatherApi.js
├── App.jsx
└── main.jsx
```

## Step 6: Run the Project

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Features Included

- ✅ Search weather by city name
- ✅ Current weather display with temperature, humidity, wind speed
- ✅ 5-day weather forecast
- ✅ Responsive design with Tailwind CSS
- ✅ GraphQL integration with Apollo Client
- ✅ Error handling and loading states
- ✅ Modern React hooks and components

## API Endpoints Used

- Current Weather: `GET /weather?q={city}&appid={API_key}&units=metric`
- 5-day Forecast: `GET /forecast?q={city}&appid={API_key}&units=metric`

## Technologies Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS
- **GraphQL**: Apollo Client
- **Icons**: Lucide React
- **HTTP Client**: Axios
- **Weather Data**: OpenWeatherMap API