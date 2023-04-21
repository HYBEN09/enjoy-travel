import styled from 'styled-components';

export const CardWrapper = styled.div`
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  width: 165px;
  transition: 0.3s;
  animation: ease-in-out;
  margin-bottom: 2rem;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

export const Image = styled.img`
  overflow: hidden;
  width: 130px;
  height: 130px;
`;

export const CardContainer = styled.div`
  margin: 1rem;
`;

export const CardTitle = styled.div``;

export const CardContent = styled.div``;
