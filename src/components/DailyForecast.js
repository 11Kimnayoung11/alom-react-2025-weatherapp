import React from "react";
import { DailyForecastWrapper, DailyItem } from "./styles/StyledComponents";
import { getWeatherDescription, formatDailyData } from "../utils/weather";

const DailyForecast = ({ weatherData }) => {
  const dailyData = formatDailyData(weatherData);

  return(
    <DailyForecastWrapper>
      {dailyData.map((day, index) => (
        <DailyItem key={index}>
          <span>{day.date}</span>
          <span>{day.weather}</span>
          <span>{Math.round(day.temperature)}°C</span>
        </DailyItem>
      ))}
    </DailyForecastWrapper>
  );

};

export default DailyForecast;
