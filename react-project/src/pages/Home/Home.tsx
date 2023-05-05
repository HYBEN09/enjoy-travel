import axios from 'axios';
import { Input } from '@/components/Input/Input';
import { AiOutlineSearch } from 'react-icons/ai';
import { CardList } from '@/components/CardList/CardList';
import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { HomeSubTitle, HomeWrapper, InputWrapper } from './HomeStyled';
import { WeatherInformation } from '@/components/WeatherInformation/WeatherInformation';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export default function Home() {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState('');

  useDocumentTitle('홈');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
    if (!event.target.value) {
      setWeatherData(null);
    }
  };

  const handleWeatherSearch = async () => {
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
      handleWeatherSearch();
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
          <button type="button" onClick={handleWeatherSearch}>
            <AiOutlineSearch className="searchIcon" />
          </button>
        </InputWrapper>
        {weatherData && <WeatherInformation weatherData={weatherData} />}
        <CardList />
      </HomeWrapper>
    </>
  );
}
