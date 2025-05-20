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
  const { time, temperature_2m, weather_code } = weatherData.hourly;

  /*
  - `latitude`, `longitude`: 서울 좌표 (37.566°N, 126.9784°E)
- `hourly`: 시간별 날씨 데이터 포함:
  - `temperature_2m`: 섭씨 온도
  - `weather_code`: 날씨 상태 코드
- `daily`: 일별 날씨 데이터 포함:
  - `weather_code`: 일별 날씨 상태 코드
  - `temperature_2m_max`: 일 최고 기온
- `timezone`: Asia/Tokyo
- `forecast_days`: 7일 예보
*/

 return time.slice(0, 12).map((t, i) => ({
    time: new Date(t).toLocaleTimeString("ko-KR", { hour: "2-digit" , hour12: true }), 
    temperature: temperature_2m[i], // 온도
    weather: getWeatherDescription(weather_code[i]), // 날씨 설명
  }));
  
};

export const formatDailyData = (weatherData) => {
  if (!weatherData) return [];
  // 밑에 코드 채워주세요
  
  const { time, temperature_2m_max, weather_code } = weatherData.daily;

  return time.slice(0, 7).map((t, i) => ({
    date: new Date(t).toLocaleDateString("ko-KR", {
      month: "long",
      day: "numeric",
      weekday: "short",
    }),
    weather: getWeatherDescription(weather_code[i]), 
    temperature: temperature_2m_max[i],
  }));
};
