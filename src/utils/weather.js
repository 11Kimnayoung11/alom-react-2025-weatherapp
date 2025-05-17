export const getWeatherDescription = (code) => {
  const weatherCodes = {
    0: "맑음",
    1: "대체로 맑음",
    2: "부분적으로 흐림",
    3: "흐림",
    45: "안개",
    48: "짙은 안개",
    51: "약한 이슬비",
    53: "보통 이슬비",
    55: "강한 이슬비",
    61: "약한 비",
    63: "보통 비",
    65: "강한 비",
    71: "약한 눈",
    73: "보통 눈",
    75: "강한 눈",
  };
  return weatherCodes[code] || "알 수 없음";
};

export const formatHourlyData = (weatherData) => {
  if (!weatherData) return [];
  // 밑에 코드 채워주세요
  const { time, temperature_2m, weather_code } = weatherData.hourly || {};
  if (!time || !temperature_2m || !weather_code) return [];

  const currentHour = new Date().getHours();
  const hourlyForecast = [];

  for (let i = currentHour; i < currentHour + 12 && i < time.length; i++) {
    const date = new Date(time[i]);
    hourlyForecast.push({
      time: date.toLocaleTimeString('ko-KR', { 
        hour: 'numeric', 
        hour12: true 
      }),
      temperature: temperature_2m[i],
      weatherCode: weather_code[i]
    });
  }
  return hourlyForecast;
};

export const formatDailyData = (weatherData) => {
  if (!weatherData) return [];
  // 밑에 코드 채워주세요
  const { time, weather_code, temperature_2m_max } = weatherData.daily || {};
  if (!time || !weather_code || !temperature_2m_max) return [];

  return time.map((date, index) => ({
    date: new Date(date).toLocaleDateString('ko-KR', {
      weekday: 'long',
      month: 'numeric',
      day: 'numeric'
    }),
    weatherCode: weather_code[index],
    temperature: temperature_2m_max[index]
  }));

};
