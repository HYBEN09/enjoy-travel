import axios from 'axios';
import { Input } from '@/components/Input/Input';
import { AiOutlineSearch } from 'react-icons/ai';
import { CardList } from '@/components/CardList/CardList';
import { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';
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

  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((data) => {
        const countriesData = data.map((country) => {
          const capital = country.capital ? country.capital[0] : 'N/A';
          const languages = country.languages
            ? Object.values(country.languages).join(', ')
            : 'N/A';
          const population = country.population
            ? country.population.toLocaleString()
            : 'N/A';
          const region = country.region ? country.region : 'N/A';
          const timezones = country.timezones
            ? country.timezones.join(', ')
            : 'N/A';
          const currencies = country.currencies
            ? Object.entries(country.currencies).map(
                ([key, value]) => `${key} (${value.name} - ${value.symbol})`
              )
            : 'N/A';
          return {
            name: country.name.common,
            flag: country.flags.png,
            capital,
            languages,
            population,
            region,
            timezones,
            currencies,
          };
        });
        setCountries(countriesData);
        const randomCountries = [];
        while (randomCountries.length < 5) {
          const randomIndex = Math.floor(Math.random() * countriesData.length);
          const randomCountry = countriesData[randomIndex];
          if (!randomCountries.includes(randomCountry)) {
            randomCountries.push(randomCountry);
          }
        }
        setFilteredCountries(randomCountries);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearch(value);
    if (value.trim() === '') {
      const randomCountries = [];
      while (randomCountries.length < 5) {
        const randomIndex = Math.floor(Math.random() * countries.length);
        const randomCountry = countries[randomIndex];
        if (!randomCountries.includes(randomCountry)) {
          randomCountries.push(randomCountry);
        }
      }
      setFilteredCountries(randomCountries);
    } else {
      setFilteredCountries(
        countries.filter((country) =>
          country.name.toLowerCase().includes(value.toLowerCase())
        )
      );
    }
  };
  return (
    <>
      <HomeWrapper>
        <HomeSubTitle>Countries</HomeSubTitle>
        <Input
          type={'text'}
          placeholder={'Search for country information in English.'}
          className="CountryInformationInput"
          value={search}
          onChange={handleSearch}
        />
        {filteredCountries.length === 0 ? (
          <p>No matching countries found.</p>
        ) : (
          <div>
            {filteredCountries.map((country) => (
              <div key={country.name}>
                <img src={country.flag} alt={`${country.name} flag`} />
                <p>{country.name}</p>
                <p>Capital: {country.capital}</p>
                <p>Languages: {country.languages}</p>
                <p>Population: {country.population}</p>
                <p>Region: {country.region}</p>
                <p>Timezones: {country.timezones}</p>
                <p>Currencies: {country.currencies}</p>
              </div>
            ))}
          </div>
        )}
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
