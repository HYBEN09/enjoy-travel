import { Input } from '@/components/Input/Input';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import axios from 'axios';
import { ChangeEvent, KeyboardEvent, useState } from 'react';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export default function Home() {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
    if (!event.target.value) {
      setWeatherData(null);
    }
  };
  const handleSearchClick = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearchClick();
    }
  };

  return (
    <>
      <HomeWrapper>
        <HomeSubTitle>Enjoy Travel</HomeSubTitle>
        <InputWrapper>
          <Input
            type={'text'}
            placeholder={'여행지의 날씨를 검색 해보세요.'}
            className="weatherInput"
            value={location}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
          <button type="button" onClick={handleSearchClick}>
            <AiOutlineSearch className="searchIcon" />
          </button>
        </InputWrapper>
        {weatherData && (
          <WeatherInfo>
            <h2>{weatherData.name} 날씨 정보</h2>
            <WeatherDetails>
              <WeatherDetailItem>
                <WeatherDetailTitle>온도</WeatherDetailTitle>
                <WeatherDetailValue>
                  {weatherData.main.temp} °C
                </WeatherDetailValue>
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
        )}
      </HomeWrapper>
    </>
  );
}

const HomeSubTitle = styled.div`
  margin-bottom: 1rem;
  font-weight: 600;
  color: var(--blue-600);
`;

const HomeWrapper = styled.div`
  margin: 1rem;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2.5rem;

  .weatherInput {
    border-radius: 16px;
  }

  button {
    position: absolute;
    right: 30px;
    font-size: 24px;
  }
`;

const WeatherInfo = styled.div`
  margin-top: 2rem;

  h2 {
    margin: 4px;
    padding-bottom: 10px;
    border-bottom: 2px solid var(--secondary);
  }
`;

const WeatherDetails = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

const WeatherDetailItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33.33%;
  margin-bottom: 1.5rem;
`;

const WeatherDetailTitle = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: var(--blue-600);
  margin-bottom: 0.5rem;
`;

const WeatherDetailValue = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--gray-800);
  text-align: center;

  img {
    width: 60px;
    height: 60px;
    margin: 0 auto;
  }
`;
