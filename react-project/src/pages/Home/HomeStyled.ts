import styled from 'styled-components';

export const HomeSubTitle = styled.div`
  margin-bottom: 1rem;
  font-weight: 600;
  color: var(--blue-600);
  font-size: 1.5em;
`;

export const HomeWrapper = styled.div`
  margin: 1rem;
  margin-bottom: 7rem;
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
    right: 30px;
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
  margin-top: 2rem;

  h2 {
    margin-top: 1rem;
  }
`;

export const CountryCard = styled.div`
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }

  h2 {
    text-align: center;
  }

  p {
    margin: 0.5rem 0;
  }
`;
