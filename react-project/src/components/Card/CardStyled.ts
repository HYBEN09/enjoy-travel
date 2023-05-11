import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  padding: 10px;
  width: 360px;
  max-height: 300px;
  transition: 0.3s;
  animation: ease-in-out;
  margin-bottom: 2rem;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

export const Image = styled.img`
  overflow: hidden;
  width: 160px;
  height: 160px;
  border-radius: 10px;
`;

export const CardContainer = styled.div`
  width: 200px;
  margin: 1rem;
`;

export const CardTitle = styled.div`
  font-size: 1.2rem;
  border-bottom: 1px solid var(--gray-300);
  margin-bottom: 1rem;
`;

export const CardContent = styled.div``;
