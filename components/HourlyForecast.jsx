"use client";
import { WiDaySunny, WiCloud, WiRain, WiSnow, WiThunderstorm, WiFog } from "react-icons/wi";

const getWeatherIcon = (main) => {
  switch (main) {
    case "Clear":
      return <WiDaySunny size={32} color="#facc15" />;
    case "Clouds":
      return <WiCloud size={32} color="#a3a3a3" />;
    case "Rain":
      return <WiRain size={32} color="#60a5fa" />;
    case "Snow":
      return <WiSnow size={32} color="#bae6fd" />;
    case "Thunderstorm":
      return <WiThunderstorm size={32} color="#f87171" />;
    case "Fog":
    case "Mist":
    case "Haze":
      return <WiFog size={32} color="#cbd5e1" />;
    default:
      return <WiDaySunny size={32} color="#facc15" />;
  }
};

export default function HourlyForecast({ forecastData }) {
  if (!forecastData || !forecastData.list) return <p className="text-white">Loading hourly data...</p>;

  // Get next 8 (about 24 hours, 3-hour interval from API)
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 mb-4">
      <h3 className="text-xl font-semibold mb-2 text-white">Hourly Forecast</h3>
      <div className="flex overflow-x-auto space-x-4">
        {forecastData.list.slice(0, 8).map((item, index) => {
          const date = new Date(item.dt * 1000);
          const hour = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
          return (
            <div key={index} className="flex flex-col items-center text-white min-w-[60px]">
              <p className="text-sm">{hour}</p>
              <div className="my-1">{getWeatherIcon(item.weather[0].main)}</div>
              <p className="text-sm">{Math.round(item.main.temp)}°C</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

