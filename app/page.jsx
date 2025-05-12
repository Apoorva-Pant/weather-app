"use client";

import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";

export default function Home() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [bgImage, setBgImage] = useState("/images/sunny.jpg"); // default image

  const API_KEY = "d8ff6151594aebbee9cc527c2df2f074";

  const handleSearch = async () => {
    if (!city) return;
    setLoading(true);
    setError("");
    setWeatherData(null);
    setForecastData(null);

    try {
      const weatherRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!weatherRes.ok || !forecastRes.ok) throw new Error("City not found");

      const weatherJson = await weatherRes.json();
      const forecastJson = await forecastRes.json();

      setWeatherData(weatherJson);
      setForecastData(forecastJson);

      // Background logic based on weather description
      const desc = weatherJson.weather[0].description.toLowerCase();
      if (desc.includes("cloud")) setBgImage("/images/cloudy.jpg");
      else if (desc.includes("rain")) setBgImage("/images/rainy.jpg");
      else if (desc.includes("storm") || desc.includes("thunder")) setBgImage("/images/storm.jpg");
      else if (desc.includes("snow")) setBgImage("/images/snowy.jpg");
      else if (desc.includes("fog") || desc.includes("mist")) setBgImage("/images/foggy.jpg");
      else if (desc.includes("dust") || desc.includes("sand")) setBgImage("/images/dusty.jpg");
      else setBgImage("/images/sunny.jpg");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      className="min-h-screen bg-cover bg-center p-4 flex flex-col items-center gap-6"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <SearchBar city={city} setCity={setCity} onSearch={handleSearch} />
      {loading && <p className="text-white">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {weatherData && forecastData && (
        <WeatherCard weatherData={weatherData} forecastData={forecastData} />
      )}
    </main>
  );
}
