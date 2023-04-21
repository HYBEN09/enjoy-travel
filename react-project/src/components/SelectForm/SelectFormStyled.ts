import styled from 'styled-components';

export const Select = styled.select`
  display: block;
  font: inherit;
  border-radius: 4px;
  border: 1px solid var(--gray-500);
  padding: 0.25rem;
  width: 100%;

  &:focus-visible {
    outline: 3px solid var(--accent);
  }
`;
