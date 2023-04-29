import styled from 'styled-components';

export const InputForm = styled.input`
  display: block;
  font: inherit;
  border-radius: 4px;
  border: 2px solid var(--gray-500);
  padding: 14px;
  width: 100%;

  &:focus-visible {
    outline: 3px solid var(--accent);
  }
`;
