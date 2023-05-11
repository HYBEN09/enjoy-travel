import styled from 'styled-components';

export const NewsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding-left: 3px;
  padding-right: 5px;
  margin: 1rem 0 55px 8px;
  max-width: 360px;

  h2 {
    font-size: 30px;
    color: var(--primary);
    margin-top: 1rem;
    max-width: 210px;
  }

  &::-webkit-scrollbar {
    width: 8px; /* 스크롤바의 너비 */
  }
`;

export const NewsContent = styled.p`
  font-weight: 600;
  margin-top: 1rem;
  color: var(--gray-800);
`;
