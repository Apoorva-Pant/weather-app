"use client";

import HourlyForecast from "./HourlyForecast";
import DailyForecast from "./DailyForecast";
import WeatherDetails from "./WeatherDetails";

export default function WeatherCard({ weatherData, forecastData }) {
  if (!weatherData || !forecastData) {
    return <p className="text-center text-white">Loading...</p>;
  }

  return (
    <div className="w-full max-w-md mx-auto text-white p-4 rounded-lg backdrop-blur-md bg-white/10">
      <div className="text-center mb-4">
        <h2 className="text-xl">{weatherData.name}</h2>
        <h1 className="text-6xl font-bold">{Math.round(weatherData.main.temp)}°</h1>
        <p className="capitalize">{weatherData.weather[0].description}</p>
        <p>
          H: {Math.round(weatherData.main.temp_max)}° L:{" "}
          {Math.round(weatherData.main.temp_min)}°
        </p>
      </div>

      <HourlyForecast forecastData={forecastData} />
      <DailyForecast forecastData={forecastData} />
      <WeatherDetails weatherData={weatherData} />
    </div>
  );
}
