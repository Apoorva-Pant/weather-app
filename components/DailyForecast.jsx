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

const getDayName = (dateString, index) => {
  if (index === 0) return "Today";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { weekday: "short" }); // Tue, Wed, etc.
};

export default function DailyForecast({ forecastData }) {
  if (!forecastData || !forecastData.list) return <p className="text-white">Loading daily data...</p>;

  // Group forecastData.list by day
  const dailyMap = {};
  forecastData.list.forEach((item) => {
    const date = new Date(item.dt * 1000);
    const day = date.toLocaleDateString("en-GB").split("/").reverse().join("-"); // YYYY-MM-DD
    if (!dailyMap[day]) dailyMap[day] = [];
    dailyMap[day].push(item);
  });

  const dailyList = Object.values(dailyMap)
    .slice(0, 7) // only 7 days
    .map((items, index) => {
      const temps = items.map((i) => i.main.temp);
      const min = Math.min(...temps);
      const max = Math.max(...temps);
      const mainWeather = items[0].weather[0].main;

      return {
        dayName: getDayName(items[0].dt_txt, index),
        min: Math.round(min),
        max: Math.round(max),
        weather: mainWeather,
      };
    });

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 mb-4">
      <h3 className="text-xl font-semibold mb-2 text-white">7-Day Forecast</h3>
      <div className="flex flex-col space-y-2">
        {dailyList.map((item, index) => (
          <div key={index} className="flex justify-between items-center text-white">
            <p className="w-20">{item.dayName}</p>
            <div className="w-8">{getWeatherIcon(item.weather)}</div>
            <p>
              {item.max}° / {item.min}°
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
