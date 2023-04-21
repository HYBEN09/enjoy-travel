import styled from 'styled-components';

export const TextArea = styled.textarea`
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

export const DivContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 14px;
  color: var(--gray-600);
`;
