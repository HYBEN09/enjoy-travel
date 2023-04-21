import { RefObject } from 'react';
import { Input } from './InputFormStyled';

interface inputProps {
  titleInputRef: RefObject<HTMLInputElement>;
}

export function InputForm({ titleInputRef }: inputProps) {
  return (
    <>
      <Input
        type="text"
        required
        id="title"
        placeholder="경험했던 것 중 가장 중요한 정보를 알려주세요"
        ref={titleInputRef}
      />
    </>
  );
}
