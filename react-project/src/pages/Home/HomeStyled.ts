import styled from 'styled-components';

export const HomeSubTitle = styled.div`
  margin-bottom: 1rem;
  font-weight: 600;
  color: var(--blue-600);
  font-size: 1.5em;
`;

export const HomeWrapper = styled.div`
  margin: 1rem;
  margin-bottom: 6rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.5rem;

  .weatherInput,
  .CountryInformationInput {
    border-radius: 16px;
  }

  button {
    position: absolute;
    right: 28px;
    font-size: 24px;
  }
`;

export const CountryInfoWrapper = styled.div`
  margin-top: 4.2rem;

  h3 {
    margin-top: 2rem;
    color: red;
    text-align: center;
    font-size: 20px;
  }
`;

export const CountryCardWrapper = styled.div`
  margin-top: 1rem;
`;

export const CountryCard = styled.div`
  margin-bottom: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  height: 500px;
  overflow: hidden;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px;

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border: 0.5px solid #ccc;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }

  h2 {
    text-align: center;
    padding: 1rem;
  }

  p {
    margin: 0.5rem 0;
  }
`;
