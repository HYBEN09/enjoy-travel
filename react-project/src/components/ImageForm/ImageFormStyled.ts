import styled from 'styled-components';

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
  margin-top: 20px;
  padding: 5px;
  border-radius: 16px;
`;

export const Image = styled.img`
  width: 350px;
  height: 400px;
`;
