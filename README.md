# 🌤️ Weather Dashboard

A beautiful, responsive weather application built with React.js and Tailwind CSS that provides real-time weather information for any city around the world.

## 🚀 Live Demo

🌐 **[View Live Application](https://amungabrendaweatherdashboard.netlify.app)**

## ✨ Features

- 🔍 **City Search**: Search for weather information in any city worldwide
- 🌡️ **Current Weather**: View current temperature, humidity, wind speed, and more
- 📅 **24-Hour Forecast**: Get detailed hourly forecast for the next 24 hours
- 🎨 **Beautiful UI**: Modern, responsive design with gradient backgrounds
- 📱 **Mobile Responsive**: Works perfectly on all device sizes
- 🌍 **Default Location**: Loads with Nairobi weather on startup
- ⚡ **Fast Loading**: Optimized with Vite for quick load times

## 🛠️ Technologies Used

- ⚛️ **React.js** - Frontend framework
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- ⚡ **Vite** - Build tool and development server
- 🌐 **OpenWeatherMap API** - Weather data provider
- 🎯 **Lucide React** - Beautiful icons
- 🚀 **Netlify** - Deployment platform

## 🏗️ Project Structure

```
src/
├── components/
│   ├── WeatherIcon.jsx      # Weather condition icons
│   ├── SearchBar.jsx        # City search component
│   ├── CurrentWeatherCard.jsx # Current weather display
│   └── ForecastCard.jsx     # Hourly forecast cards
├── api/
│   └── weatherService.js    # API integration
├── WeatherDashboard.jsx     # Main application component
└── App.jsx                  # Root component
```

## 🚀 Getting Started

### Prerequisites

- 📦 Node.js (v18 or higher)
- 📋 npm or yarn
- 🌐 Modern web browser

### Installation

1. **Clone the repository**
   ```bash
   git clone [https://github.com/PLP-MERN-Stack-Development/week-3-react-js-assignment-AmungaBrenda.git]
   cd week-3-react-js-assignment-AmungaBrenda
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env file
   VITE_WEATHER_API_KEY=your_openweathermap_api_key
   VITE_WEATHER_API_URL=https://api.openweathermap.org/data/2.5
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 📱 Components Overview

### 🔍 SearchBar
- Input field for city search
- Real-time search functionality
- Loading states and error handling

### 🌡️ CurrentWeatherCard
- Displays current weather conditions
- Temperature, humidity, wind speed, pressure
- Beautiful gradient background
- Weather-appropriate icons

### 📊 ForecastCard
- Hourly forecast display
- 24-hour weather prediction
- Scrollable horizontal layout
- Compact weather information

### 🎨 WeatherIcon
- Dynamic weather condition icons
- Condition-based styling
- Responsive sizing

## 🎯 Key Features Implementation

### State Management
- ✅ React hooks (useState, useEffect)
- ✅ Loading states
- ✅ Error handling
- ✅ API data management

### API Integration
- ✅ OpenWeatherMap API
- ✅ Current weather data
- ✅ 5-day forecast data
- ✅ Error handling and validation

### Responsive Design
- ✅ Mobile-first approach
- ✅ Tailwind CSS utilities
- ✅ Flexible grid layouts
- ✅ Smooth animations

## 🌟 Highlights

- 🎨 **Modern UI/UX**: Clean, intuitive design with smooth transitions
- 📱 **Responsive**: Works seamlessly across all devices
- ⚡ **Performance**: Fast loading with optimized API calls
- 🌍 **Global**: Search weather for any city worldwide
- 🎯 **User-Friendly**: Simple search interface with clear weather display

## 🚀 Deployment

The application is deployed on Netlify with automatic deployments from the main branch.

**Live URL**: [amungabrendaweatherdashboard.netlify.app](https://amungabrendaweatherdashboard.netlify.app)

## 🤝 Contributing

Feel free to contribute to this project by:
1. 🍴 Forking the repository
2. 🌿 Creating a feature branch
3. 💻 Making your changes
4. 📝 Committing your changes
5. 🚀 Pushing to the branch
6. 🔄 Creating a Pull Request

## 📄 License

This project is part of a React.js and Tailwind CSS assignment.

---

Made with ❤️ by Brenda Amunga

🌤️ **Check the weather, plan your day!**
