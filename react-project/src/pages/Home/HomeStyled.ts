import styled from 'styled-components';

export const HomeSubTitle = styled.div`
  margin-bottom: 1rem;
  font-weight: 600;
  color: var(--blue-600);
`;

export const HomeWrapper = styled.div`
  margin: 1rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2.5rem;

  .weatherInput {
    border-radius: 16px;
  }

  button {
    position: absolute;
    right: 30px;
    font-size: 24px;
  }
`;
