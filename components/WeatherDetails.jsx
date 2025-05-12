"use client";
import { WiHumidity, WiBarometer, WiStrongWind, WiThermometer, WiSunrise, WiSunset, WiRaindrop, WiDaySunny } from "react-icons/wi";

export default function WeatherDetails({ weatherData }) {
  if (!weatherData || !weatherData.main) return <p className="text-white">Loading details...</p>;

  const details = [
    {
      label: "Humidity",
      value: `${weatherData.main.humidity}%`,
      icon: <WiHumidity size={32} color="#60a5fa" />,
    },
    {
      label: "Pressure",
      value: `${weatherData.main.pressure} hPa`,
      icon: <WiBarometer size={32} color="#f87171" />,
    },
    {
      label: "Wind Speed",
      value: `${weatherData.wind.speed} m/s`,
      icon: <WiStrongWind size={32} color="#a3a3a3" />,
    },
    {
      label: "Feels Like",
      value: `${Math.round(weatherData.main.feels_like)}°C`,
      icon: <WiThermometer size={32} color="#facc15" />,
    },
    {
      label: "Min Temp",
      value: `${Math.round(weatherData.main.temp_min)}°C`,
      icon: <WiRaindrop size={32} color="#38bdf8" />,
    },
    {
      label: "Max Temp",
      value: `${Math.round(weatherData.main.temp_max)}°C`,
      icon: <WiDaySunny size={32} color="#fde68a" />,
    },
    {
      label: "Sunrise",
      value: new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      icon: <WiSunrise size={32} color="#fbbf24" />,
    },
    {
      label: "Sunset",
      value: new Date(weatherData.sys.sunset * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      icon: <WiSunset size={32} color="#f97316" />,
    },
  ];

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 mb-6 w-full">
      <h3 className="text-xl font-semibold mb-6 text-white">Weather Details</h3>

      {/* force always 2 cards per row */}
      <div className="grid grid-cols-2 gap-4 w-full">
        {details.map((item, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md rounded-lg p-4 flex items-center space-x-4 w-full"
          >
            {item.icon}
            <div className="text-white">
              <p className="text-sm">{item.label}</p>
              <p className="font-bold">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
