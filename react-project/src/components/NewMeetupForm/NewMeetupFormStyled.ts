import styled from 'styled-components';

export const Form = styled.form`
  margin: 0.5rem 0.5rem;
  padding: 0.5rem;
`;
export const FormGroup = styled.div`
  margin-top: 3rem;
`;

export const Label = styled.label`
  font-size: 1.5rem;
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
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

export const DivContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 14px;
  color: var(--gray-600);
`;

export const ImageInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

export const ImageContainer = styled.div`
  margin-top: 30px;
  padding: 10px;
  border-radius: 16px;
`;

export const Image = styled.img`
  width: 350px;
  height: 300px;
`;
