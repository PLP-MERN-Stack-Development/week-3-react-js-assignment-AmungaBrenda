// src/components/ForecastCard.jsx
import React from 'react';
import WeatherIcon from './WeatherIcon';
import { formatTemperature, formatTime } from '../utils/weatherUtils';

const ForecastCard = ({ forecast }) => {
  const time = formatTime(forecast.dt);
  const temp = formatTemperature(forecast.main.temp);

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

export default ForecastCard;