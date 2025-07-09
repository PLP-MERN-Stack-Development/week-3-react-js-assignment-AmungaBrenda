// src/components/WeatherIcon.jsx
import React from 'react';
import { Sun, Cloud, CloudRain, CloudSnow, Zap } from 'lucide-react';

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

export default WeatherIcon;