import styled from 'styled-components';

export const WeatherInfo = styled.div`
  margin-top: 2rem;

  h2 {
    margin: 4px;
    padding-bottom: 10px;
    border-bottom: 2px solid var(--secondary);
  }
`;

export const WeatherDetails = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

export const WeatherDetailItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33.33%;
  margin-bottom: 1.5rem;
`;

export const WeatherDetailTitle = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: var(--blue-600);
  margin-bottom: 0.5rem;
`;

export const WeatherDetailValue = styled.div`
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
