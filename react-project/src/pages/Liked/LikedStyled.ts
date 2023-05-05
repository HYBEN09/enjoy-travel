import styled from 'styled-components';

export const LikedWrapper = styled.div`
  padding-left: 3px;
  padding-right: 5px;
  margin: 1rem 0 90px 8px;

  h2 {
    font-size: 30px;
    color: var(--primary);
    margin-top: 1rem;
  }
`;

export const LikedContent = styled.p`
  font-weight: 600;
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: var(--gray-800);
`;

export const LikedNoContent = styled.p`
  font-weight: 600;
  font-size: 32px;
  margin-top: 1rem;
  text-align: center;
  line-height: 500px;
  color: var(--secondary);
`;
