import axios from 'axios';
import styled from 'styled-components';
import { Input } from '@/components/Input/Input';
import { AiOutlineSearch } from 'react-icons/ai';
import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { WeatherInformation } from '@/components/WeatherInformation/WeatherInformation';
import CardList from '@/components/CardList/CardList';

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
      alert('영어로 입력해주세요 😢');
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
        {weatherData && <WeatherInformation weatherData={weatherData} />}
        <CardList />
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
