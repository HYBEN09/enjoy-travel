import styled from 'styled-components';
import { RiArrowGoBackFill } from 'react-icons/ri';

export const DetailWrapper = styled.div`
  display: flex;
  flex-flow: column;
  margin: 1rem 1rem 85px 1rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    margin-right: auto;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    margin-top: 30px;
    font-size: 24px;
    border-radius: 10px;
    background-color: var(--gray-200);
    color: var(--blue-400);
  }
`;

export const DetailImageContainer = styled.div`
  margin-top: 1rem;
  position: relative;

  img {
    width: 100%;
    height: 450px;
    max-width: 100%;
  }
`;

export const BackButton = styled.button`
  position: absolute;
  background-color: var(--white);
  width: 40px;
  height: 40px;
  border-radius: 16px;
  top: 10px;
  left: 10px;
`;

export const DetailContainer = styled.div`
  margin-top: 2rem;

  span {
    font-weight: 600;
  }

  h2 {
    margin-top: 2rem;
    font-size: 28px;
  }
`;

export const DetailTextContainer = styled.div`
  margin-top: 1rem;
  padding: 1rem 5px 1rem 5px;
  border-top: 2px solid var(--primary);
`;

export const Button = styled.button`
  font: inherit;
  cursor: pointer;
  background-color: var(--primary);
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 24px;
  font-size: 20px;
  font-weight: bold;
  width: 100%;

  &:hover,
  &:active {
    background-color: var(--blue-700);
  }

  &:focus-visible {
    outline: 3px solid var(--blue-900);
  }
`;

export const RedeMoreButton = styled.button`
  margin-top: 3px;
  color: var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BackArrow = styled(RiArrowGoBackFill)`
  font-weight: 600;
  margin-left: 3px;
  margin-bottom: -6px;
`;
