// src/components/CurrentWeatherCard.jsx
import React from 'react';
import { MapPin, Droplets, Wind, Thermometer, Eye } from 'lucide-react';
import WeatherIcon from './WeatherIcon';
import { formatTemperature, formatWindSpeed, formatVisibility } from '../utils/weatherUtils';

const CurrentWeatherCard = ({ weather }) => {
  if (!weather) return null;

  const { main, weather: weatherData, wind, visibility, name, country } = weather;
  const temp = formatTemperature(main.temp);
  const feelsLike = formatTemperature(main.feels_like);

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
            <div className="font-semibold">{formatWindSpeed(wind.speed)}</div>
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
            <div className="font-semibold">{formatVisibility(visibility)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeatherCard;