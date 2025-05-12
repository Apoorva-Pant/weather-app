import {
  WiDaySunny,
  WiNightClear,
  WiCloud,
  WiRain,
  WiThunderstorm,
  WiSnow,
  WiFog,
} from "react-icons/wi";

export function getWeatherIcon(main, size = 64, className = "") {
  switch (main) {
    case "Clear":
      return <WiDaySunny size={size} className={className} />;
    case "Clouds":
      return <WiCloud size={size} className={className} />;
    case "Rain":
    case "Drizzle":
      return <WiRain size={size} className={className} />;
    case "Thunderstorm":
      return <WiThunderstorm size={size} className={className} />;
    case "Snow":
      return <WiSnow size={size} className={className} />;
    case "Mist":
    case "Fog":
    case "Haze":
    case "Dust":
    case "Smoke":
    case "Sand":
    case "Ash":
    case "Squall":
    case "Tornado":
      return <WiFog size={size} className={className} />;
    default:
      return <WiDaySunny size={size} className={className} />;
  }
}
