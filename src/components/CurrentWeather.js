import React from "react";
import {
  CurrentWeatherWrapper,
  Temperature,
  WeatherCode,
} from "./styles/StyledComponents";
import { getWeatherDescription, formatHourlyData } from "../utils/weather";

const CurrentWeather = ({ weatherData, isLoading }) => {
  if (isLoading) {
    return <div>로딩 중...</div>;
  }
  
  const hourlyData = formatHourlyData(weatherData);
  const current = hourlyData[0] || {};

  return (
    <CurrentWeatherWrapper>
      <Temperature>{current.temperature ? `${Math.round(current.temperature)}°C` : "N/A"}</Temperature>
      <WeatherCode>{current.weather}</WeatherCode>
    </CurrentWeatherWrapper>
  );
};

export default CurrentWeather;