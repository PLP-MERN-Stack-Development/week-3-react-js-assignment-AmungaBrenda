// src/api/weatherService.js
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const API_URL = import.meta.env.VITE_WEATHER_API_URL || 'https://api.openweathermap.org/data/2.5';

class WeatherService {
  async getCurrentWeather(city) {
    try {
      const response = await fetch(`${API_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`);
      if (!response.ok) {
        throw new Error('City not found');
      }
      return await response.json();
    } catch (error) {
      throw new Error('Failed to fetch weather data');
    }
  }

  async getForecast(city) {
    try {
      const response = await fetch(`${API_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`);
      if (!response.ok) {
        throw new Error('City not found');
      }
      return await response.json();
    } catch (error) {
      throw new Error('Failed to fetch forecast data');
    }
  }

  async getWeatherByCoordinates(lat, lon) {
    try {
      const response = await fetch(`${API_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
      return await response.json();
    } catch (error) {
      throw new Error('Failed to fetch weather data');
    }
  }
}

export default new WeatherService();