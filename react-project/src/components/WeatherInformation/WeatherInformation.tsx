import {
  WeatherInfo,
  WeatherDetails,
  WeatherDetailItem,
  WeatherDetailTitle,
  WeatherDetailValue,
} from './WeatherInfoStyled';

interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    icon: string;
    description: string;
  }[];
}

export function WeatherInformation({
  weatherData,
}: {
  weatherData: WeatherData;
}) {
  return (
    <WeatherInfo>
      <h2>{weatherData.name} 날씨 정보</h2>
      <WeatherDetails>
        <WeatherDetailItem>
          <WeatherDetailTitle>온도</WeatherDetailTitle>
          <WeatherDetailValue>{weatherData.main.temp} °C</WeatherDetailValue>
        </WeatherDetailItem>
        <WeatherDetailItem>
          <WeatherDetailTitle>습도</WeatherDetailTitle>
          <WeatherDetailValue>
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
              alt="날씨 아이콘"
            />
            {weatherData.weather[0].description}
          </WeatherDetailValue>
        </WeatherDetailItem>
        <WeatherDetailItem>
          <WeatherDetailTitle>날씨</WeatherDetailTitle>
          <WeatherDetailValue>
            {weatherData.weather[0].description}
          </WeatherDetailValue>
        </WeatherDetailItem>
      </WeatherDetails>
    </WeatherInfo>
  );
}
