import styled from 'styled-components';

export const Form = styled.form`
  margin: 0.5rem 0.5rem;
  padding: 0.5rem;
`;
export const FormGroup = styled.div`
  margin-top: 2rem;
`;
export const FormButtonGroup = styled.div`
  margin-top: 1rem;
  margin-bottom: 5rem;
`;

export const Label = styled.label`
  font-size: 1.5rem;
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
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

export const ReviewContent = styled.p`
  font-weight: 600;
  color: var(--gray-800);
  margin-top: 0.5rem;
`;

export const ReviewTitle = styled.h2`
  font-size: 30px;
  color: var(--primary);
  margin-top: 1rem;
`;
