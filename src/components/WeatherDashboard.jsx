import React, { useState, useEffect } from 'react';
import { Search, MapPin, Thermometer, Droplets, Wind, Eye, Sun, Cloud, CloudRain, CloudSnow, Zap } from 'lucide-react';

// Weather API service
const API_KEY = 'a08101c2556ff3d67c0f99d8a546cba3'; // Replace with your actual API key
const API_URL = 'https://api.openweathermap.org/data/2.5';

const weatherService = {
  getCurrentWeather: async (city) => {
    try {
      const response = await fetch(`${API_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`);
      if (!response.ok) throw new Error('City not found');
      return await response.json();
    } catch (error) {
      throw new Error('Failed to fetch weather data');
    }
  },

  getForecast: async (city) => {
    try {
      const response = await fetch(`${API_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`);
      if (!response.ok) throw new Error('City not found');
      return await response.json();
    } catch (error) {
      throw new Error('Failed to fetch forecast data');
    }
  }
};

// Weather icon component
const WeatherIcon = ({ condition, size = 'w-16 h-16' }) => {
  const iconMap = {
    'Clear': <Sun className={`${size} text-yellow-500`} />,
    'Clouds': <Cloud className={`${size} text-gray-500`} />,
    'Rain': <CloudRain className={`${size} text-blue-500`} />,
    'Snow': <CloudSnow className={`${size} text-blue-200`} />,
    'Thunderstorm': <Zap className={`${size} text-purple-500`} />,
    'Drizzle': <CloudRain className={`${size} text-blue-400`} />,
    'Mist': <Cloud className={`${size} text-gray-400`} />,
    'Fog': <Cloud className={`${size} text-gray-400`} />,
  };
  
  return iconMap[condition] || <Sun className={`${size} text-yellow-500`} />;
};

// Search component
const SearchBar = ({ onSearch, loading }) => {
  const [city, setCity] = useState('');

  const handleSubmit = () => {
    if (city.trim()) {
      onSearch(city.trim());
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="relative max-w-md mx-auto">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter city name..."
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          disabled={loading}
        />
      </div>
      <button
        onClick={handleSubmit}
        disabled={loading || !city.trim()}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {loading ? 'Searching...' : 'Search'}
      </button>
    </div>
  );
};

// Current weather card component
const CurrentWeatherCard = ({ weather }) => {
  if (!weather) return null;

  const { main, weather: weatherData, wind, visibility, name, country } = weather;
  const temp = Math.round(main.temp);
  const feelsLike = Math.round(main.feels_like);

  return (
    <div className="bg-gradient-to-br from-blue-400 to-blue-600 text-white p-6 rounded-xl shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            {name}, {country}
          </h2>
          <p className="text-blue-100 capitalize">{weatherData[0].description}</p>
        </div>
        <WeatherIcon condition={weatherData[0].main} size="w-20 h-20" />
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="text-center">
          <div className="text-4xl font-bold">{temp}°C</div>
          <div className="text-sm text-blue-100">Current</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-semibold">{feelsLike}°C</div>
          <div className="text-sm text-blue-100">Feels like</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center gap-2">
          <Droplets className="w-5 h-5 text-blue-200" />
          <div>
            <div className="text-sm text-blue-100">Humidity</div>
            <div className="font-semibold">{main.humidity}%</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Wind className="w-5 h-5 text-blue-200" />
          <div>
            <div className="text-sm text-blue-100">Wind Speed</div>
            <div className="font-semibold">{wind.speed} m/s</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Thermometer className="w-5 h-5 text-blue-200" />
          <div>
            <div className="text-sm text-blue-100">Pressure</div>
            <div className="font-semibold">{main.pressure} hPa</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Eye className="w-5 h-5 text-blue-200" />
          <div>
            <div className="text-sm text-blue-100">Visibility</div>
            <div className="font-semibold">{visibility / 1000} km</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Forecast card component
const ForecastCard = ({ forecast }) => {
  const date = new Date(forecast.dt * 1000);
  const time = date.toLocaleTimeString('en-US', { hour: 'numeric', hour12: true });
  const temp = Math.round(forecast.main.temp);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md text-center min-w-[120px]">
      <div className="text-sm text-gray-600 mb-2">{time}</div>
      <div className="flex justify-center mb-2">
        <WeatherIcon condition={forecast.weather[0].main} size="w-10 h-10" />
      </div>
      <div className="font-semibold text-lg">{temp}°C</div>
      <div className="text-xs text-gray-500 capitalize">{forecast.weather[0].description}</div>
    </div>
  );
};

// Main App component
const WeatherDashboard = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (city) => {
    setLoading(true);
    setError('');
    
    try {
      const [weatherData, forecastData] = await Promise.all([
        weatherService.getCurrentWeather(city),
        weatherService.getForecast(city)
      ]);
      
      setCurrentWeather({
        ...weatherData,
        country: weatherData.sys.country
      });
      setForecast(forecastData.list.slice(0, 8)); // Next 24 hours (8 x 3-hour intervals)
    } catch (err) {
      setError(err.message);
      setCurrentWeather(null);
      setForecast(null);
    } finally {
      setLoading(false);
    }
  };

  // Load default city on mount
  useEffect(() => {
    handleSearch('Nairobi');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Weather Dashboard</h1>
          <p className="text-gray-600">Get real-time weather information for any city</p>
        </header>

        <div className="mb-8">
          <SearchBar onSearch={handleSearch} loading={loading} />
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6 text-center">
            {error}
          </div>
        )}

        {currentWeather && (
          <div className="max-w-md mx-auto mb-8">
            <CurrentWeatherCard weather={currentWeather} />
          </div>
        )}

        {forecast && (
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">24-Hour Forecast</h3>
            <div className="overflow-x-auto">
              <div className="flex gap-4 pb-4">
                {forecast.map((item, index) => (
                  <ForecastCard key={index} forecast={item} />
                ))}
              </div>
            </div>
          </div>
        )}

        {!currentWeather && !loading && !error && (
          <div className="text-center text-gray-500 mt-12">
            <Sun className="w-16 h-16 mx-auto mb-4 text-yellow-500" />
            <p>Search for a city to see the weather</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherDashboard;