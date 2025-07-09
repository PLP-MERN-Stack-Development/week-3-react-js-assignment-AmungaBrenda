// src/utils/weatherUtils.js

/**
 * Format temperature to display with proper rounding
 * @param {number} temp - Temperature in Celsius
 * @returns {string} Formatted temperature string
 */
export const formatTemperature = (temp) => {
  return Math.round(temp);
};

/**
 * Format wind speed
 * @param {number} speed - Wind speed in m/s
 * @returns {string} Formatted wind speed
 */
export const formatWindSpeed = (speed) => {
  return `${speed} m/s`;
};

/**
 * Format visibility
 * @param {number} visibility - Visibility in meters
 * @returns {string} Formatted visibility in km
 */
export const formatVisibility = (visibility) => {
  return `${(visibility / 1000).toFixed(1)} km`;
};

/**
 * Format timestamp to readable time
 * @param {number} timestamp - Unix timestamp
 * @returns {string} Formatted time string
 */
export const formatTime = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleTimeString('en-US', { 
    hour: 'numeric', 
    hour12: true 
  });
};

/**
 * Format timestamp to readable date
 * @param {number} timestamp - Unix timestamp
 * @returns {string} Formatted date string
 */
export const formatDate = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString('en-US', { 
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });
};

/**
 * Get weather condition color
 * @param {string} condition - Weather condition
 * @returns {string} Tailwind color class
 */
export const getWeatherColor = (condition) => {
  const colorMap = {
    'Clear': 'from-yellow-400 to-orange-500',
    'Clouds': 'from-gray-400 to-gray-600',
    'Rain': 'from-blue-400 to-blue-600',
    'Snow': 'from-blue-200 to-blue-400',
    'Thunderstorm': 'from-purple-500 to-purple-700',
    'Drizzle': 'from-blue-300 to-blue-500',
    'Mist': 'from-gray-300 to-gray-500',
    'Fog': 'from-gray-300 to-gray-500',
  };
  
  return colorMap[condition] || 'from-blue-400 to-blue-600';
};

/**
 * Get weather description
 * @param {string} condition - Weather condition
 * @returns {string} Human-readable description
 */
export const getWeatherDescription = (condition) => {
  const descriptions = {
    'Clear': 'Clear sky',
    'Clouds': 'Cloudy',
    'Rain': 'Rainy',
    'Snow': 'Snowy',
    'Thunderstorm': 'Thunderstorm',
    'Drizzle': 'Light rain',
    'Mist': 'Misty',
    'Fog': 'Foggy',
  };
  
  return descriptions[condition] || condition;
};

/**
 * Convert wind direction degrees to compass direction
 * @param {number} degrees - Wind direction in degrees
 * @returns {string} Compass direction
 */
export const getWindDirection = (degrees) => {
  const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
  const index = Math.round(degrees / 22.5) % 16;
  return directions[index];
};